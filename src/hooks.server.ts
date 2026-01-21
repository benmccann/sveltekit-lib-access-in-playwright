import type { Handle } from '@sveltejs/kit';
import { redirect } from 'sveltekit-flash-message/server'

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === '/') {
    redirect(
      307,
      '/about',
      'hello world',
      event
    );
  }

  return await resolve(event);
};
