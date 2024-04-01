import { fail, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { db } from '$lib/server/db/gamedata/client'
import { characters } from '$lib/server/db/gamedata/schema'
import { sql } from 'drizzle-orm'

export const load = (async () => {
  return {}
}) satisfies PageServerLoad

export const actions = {
  gamelog: async ({ request, locals }) => {
    const session = await locals.auth()
    if (!session?.user?.id) return fail(500, { message: 'Not Authorized, Please Login' })

    const data = await request.formData()
    const file = data.get('file')
    if (!(file instanceof File)) return fail(400, { message: 'File Content Required' })

    const PLAYER_NAME = '[GameConnection] GameConnectionWrapper::Connect: playerName = '
    const WORLD_ID = '[Game] LogEnvironmentString: World ID: '
    const CHARACTER_ID = '[Game] LogEnvironmentString: Character ID: '
    const CHANNEL_NAME = '[Info]: Channel name: '
    const STEAM_APP_ID = '[Game] Using Steam App ID: '

    const text = await file.text()

    const characters_arr = []
    const character: typeof characters.$inferInsert = {
      id: '',
      name: '',
      worldId: null,
      userId: session.user.id,
      steamAppId: null
    }

    for (const line of lines(text)) {
      if (!line.includes(PLAYER_NAME) && !line.includes(WORLD_ID) && !line.includes(CHARACTER_ID)) continue

      if (line.includes(PLAYER_NAME)) {
        const [_, name] = line.split(PLAYER_NAME)
        character.name = name.trim()
      }
      if (line.includes(WORLD_ID)) {
        const [_, world] = line.split(WORLD_ID)
        character.worldId = world.trim()
      }
      if (line.includes(STEAM_APP_ID)) {
        const [_, id] = line.split(STEAM_APP_ID)
        character.steamAppId = Number(id)
      }
      if (line.includes(CHARACTER_ID)) {
        const [_, id] = line.split(CHARACTER_ID)
        character.id = id.trim()
        characters_arr.push(character)
      }
    }

    const upsert = await db.insert(characters).values(characters_arr).onConflictDoUpdate({
      target: characters.id,
      set: {
        name: sql.raw(`excluded.${characters.name.name}`),
        userId: sql.raw(`excluded.${characters.userId.name}`),
        worldId: sql.raw(`excluded.${characters.worldId.name}`),
        steamAppId: sql.raw(`excluded.${characters.steamAppId.name}`),
        updatedAt: sql`CURRENT_TIMESTAMP`
      },

    })
      .returning({ name: characters.name })

    return {
      success: true,
      type: 'gamelog',
      upsert

    }

  }
} satisfies Actions

function* lines(text: string) {
  const lines = text.split('\n')
  for (const line of lines) {
    yield line
  }
}