import { postsQuery, catQuery, subcatQuery} from '$lib/sanity/queries';

export const load = async (event) => {
	const { loadQuery } = event.locals;
	const initialPosts = await loadQuery(postsQuery);
	const initialCats = await loadQuery(catQuery);
	const initialSubcats = await loadQuery(subcatQuery);
	// We pass the data in a format that is easy for `useQuery` to consume in the
	// corresponding `+page.svelte` file, but you can return the data in any
	// format you like.
	return {
		postsData: {
			query: postsQuery,
			options: { initial: initialPosts }
		},
		catData: {
			query: catQuery,
			options: { initial: initialCats }
		},
		subcatData: {
			query: subcatQuery,
			options: { initial: initialSubcats }
		}
	};
};