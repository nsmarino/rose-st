<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
    import { fly } from "svelte/transition"

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
</script>

<main in:fly={{y: 10}}>
	<h1>A Venture Capital<br />Firm Investing In The<br />Future Of The<br />Consumer Internet.</h1>
</main>

<style>
	main {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-basis: 100%;
	}
	h1 {
		font-family: 'Neue Machina';
		font-weight: 300;
		font-size: 80px;
		text-transform: uppercase;
	}
	br {

	}
</style>
