import { handle as authentication } from '$lib/server/db/users/auth'
import type { users } from '@/server/db/users/schema'
import { redirect, type Handle, type HandleServerError } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

const authorization = (async ({ event, resolve }) => {
  const { url, locals } = event
  const session = await locals.auth()

  if (session?.user?.id && url.pathname.startsWith('/signin')) redirect(303, '/')

  if (url.pathname.startsWith('/settings') && !session) redirect(303, '/signin')

  if (url.pathname.startsWith('/reports') && session?.user?.role !== 'admin' && session?.user?.role !== 'maintainer') redirect(303, '/')

  return resolve(event)
}) satisfies Handle

export const handle = sequence(authentication, authorization) satisfies Handle

declare module "@auth/core/types" {
  export interface Session {
    error?: "RefreshAccessTokenError"
  }
  export interface User {
    role: typeof users.$inferSelect.role
  }
}

export const handleError = (async ({ error, event, status, message }) => {
  const errorId = crypto.randomUUID()
  console.log(status, error)

  return {
    message,
    errorId,
  }
}) satisfies HandleServerError
