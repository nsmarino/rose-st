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

<main>
	<h1>A Venture Capital<br class="desktop" /> Firm Investing  In The<br class="desktop" />  Future Of  The <br class="desktop" /> Consumer Internet.</h1>
</main>

<style>
	main {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-basis: 100%;
		margin-bottom: 70px;
		opacity: 0;
		animation: fadein 0.4s;
		animation-fill-mode: forwards;
		animation-delay: 400ms;
		margin: 0 15px;
	}

	@keyframes fadein {
		0%   { opacity: 0; }
		100% { opacity: 1; }
	}

	h1 {
		font-family: 'Neue Machina';
		font-weight: 300;
		font-size: 28px;
		text-transform: uppercase;
		line-height: 48px;
		margin: 0;
	}
	br.desktop {
			display: none;
	}

	@media (min-width: 575px) {
		h1 {
			font-size: 64px;
			line-height: 1.2;
		}
		br.mobile {
			display: none;
		}
		br.desktop {
			display: inline;
		}
	}
</style>
