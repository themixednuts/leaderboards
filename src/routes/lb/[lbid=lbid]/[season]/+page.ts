import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { LEADERBOARD_ID_MAP } from '$lib/leaderboardmap'

export const load = (async ({ fetch, params, parent }) => {
  const { lbid, season } = params
  const { currentSeason } = await parent()
  const validSeasons = ['q1', 's1', 's2', 's3']
  const seasonId = validSeasons.includes(season) ? season : currentSeason

  const json = fetch(`https://lb.jakel.rocks/json/${lbid}/${seasonId}?size=1000`).then(
    (res) => res.json() as Promise<LeaderboardAPIBoardResponse>,
  )

  if (!validSeasons.includes(season)) {
    throw redirect(301, `/lb/${lbid}/${currentSeason}`)
  }
  return {
    json,
    id: lbid as keyof typeof LEADERBOARD_ID_MAP,
  } as const
}) satisfies PageLoad