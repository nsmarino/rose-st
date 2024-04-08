import type { LayoutServerLoad } from './$types';
import { settingsQuery as query} from '$lib/sanity/queries';

export const prerender = true;

export const load: LayoutServerLoad = async (event) => {
	// The `event.locals.preview` value received here is set by the helper function
	// in `hooks.server.ts`. It indicates whether the app is in preview mode or not.
	const { preview, loadQuery } = event.locals;
	const initial = await loadQuery(query);
	const {pathname} = event.url
	// As `event.locals` is only available on the server, we can expose the value
	// to the client by returning it here.
	return { preview, query, options: {initial}, pathname };
};
