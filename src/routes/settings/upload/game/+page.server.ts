import type { PageServerLoad, Actions, Action } from './$types'
import { db } from '$lib/server/db/gamedata/client'
import { characters } from '$lib/server/db/gamedata/schema'
import { sql } from 'drizzle-orm'
import { fail, message, setError, superValidate, withFiles, type Infer } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { formSchema, type FormSchema } from './schema'

interface Message {
  type: string
  message?: string
  upsert?: { name: string }[]
}
export const load = (async () => {
  return {
    form: await superValidate<Infer<FormSchema>, Message>(zod(formSchema))
  }
}) satisfies PageServerLoad

export const actions = {
  default: (async (event) => {
    const form = await superValidate(event, zod(formSchema))
    if (!form.valid) return fail(400, { form })

    const session = await event.locals.auth()
    if (!session?.user?.id) {
      return setError(form, 'file', 'Not Authorized', { status: 500 })
    }

    const file = form.data.file

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

    if (!characters_arr.length) return message(form, {
      type: 'gamelog',
      message: 'No characters found!'
    }, { status: 400 })

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


    return message(form, {
      type: 'gamelog',
      upsert
    })

  }) satisfies Action,
} satisfies Actions

function* lines(text: string) {
  const lines = text.split('\n')
  for (const line of lines) {
    yield line
  }
}
