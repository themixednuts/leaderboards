import { match_leaderboard, type LeaderboardAPIBoardItem } from '$lib/leaderboard/utils'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { getCharacterById, getCompanyById } from '@/server/db/gamedata/helpers'

export const load = (async ({ locals, fetch, url, params: { season, type, first, second, category, rotation, page }, parent, url: { searchParams } }) => {
  const session = await locals.auth()
  const { leaderboards } = await parent()

  const displayName = searchParams.get('q')
  const pageSize = 10
  const leaderboard = leaderboards.find(lb => match_leaderboard(lb, {
    //@ts-expect-error
    FirstLevelCategory: first,
    Category: category,
    SecondLevelCategory: second,
    //@ts-expect-error
    Rotation: rotation,
    CharacterLeaderboard: type === 'character' ? true : undefined,
    FactionLeaderboard: type === 'faction' ? true : undefined,
    GroupLeaderboard: type === 'group' ? true : undefined,
    CompanyLeaderboard: type === 'company' ? true : undefined,
    //@ts-expect-error
    DisplayName: displayName,
  }))

  if (!leaderboard) {
    console.log('No leaderboard found')

    return error(400, `This category is not tracked by ${type}`)
  }

  const id = type === 'faction' ? leaderboard.FactionLeaderboardDefinitionId : leaderboard.LeaderboardDefinitionId
  if (!id) {
    console.log('No leaderboard id found')
    return error(400, 'Leaderboard ID not found')
  }

  const api = `/lb/api/leaderboard/${id}/${season}/${page}`
  const json = fetch(api, {
    headers: {
      'x-forwarded-host': url.host
    }
  })
    .then(res => res.json() as Promise<LeaderboardAPIBoardItem[]>)
    .then(items => ({
      data: items.slice(page - 1, page * pageSize).map(entry => {
        if (type === 'character' && entry.entityId) return {
          ...entry,
          entityId: entry.entityId.split('_').map(id => getCharacterById(id, session?.user).then(character => ({ ...character, type: 'character' }))),
        }
        if (type === 'company' && entry.entityId) return {
          ...entry,
          entityId: entry.entityId.split('_').map(id => getCompanyById(id.replace(/\{|\}/g, ''), session?.user).then(company => ({ ...company, type: 'company' }))),
        }
        return entry
      }), total: Math.ceil(items.length / pageSize)
    }))
  json.catch(e => console.log(e))




  // const api = `https://api.nwlb.info/json/${id}/${season}?size=10000&eid=true`
  // const data = fetch(api).then(res => res.json() as Promise<LeaderboardAPIBoardItem[]>)
  // data.catch((e) => {
  //   console.log(e)
  // })

  return {
    json,
    leaderboard,
  }
}) satisfies PageServerLoad
