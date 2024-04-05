<script>
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import { fade } from "svelte/transition"
	import { useQuery } from '@sanity/svelte-loader';
	import { getFile } from "@sanity/asset-utils";

	import LiveMode from '../components/LiveMode.svelte';
	import { urlFor } from '$lib/sanity/image';
	import { client } from "$lib/sanity/client"

	// Visual editing and Presentation view
	import { onMount } from 'svelte'
	import { enableVisualEditing } from '@sanity/visual-editing'
	import { useLiveMode } from '@sanity/svelte-loader'
	import { PUBLIC_SANITY_STUDIO_URL } from '$env/static/public'

	onMount(() => enableVisualEditing())
	onMount(() => useLiveMode({
		// If `stega.studioUrl` was not provided to the client instance in `sanity.ts`, a studioUrl should be provided here
		studioUrl: PUBLIC_SANITY_STUDIO_URL
		// ...or alternatively provide the stega client directly
		// client: client.withConfig({
		//   stega: true
		// })
	}))

	export let data
	let windowWidth
	let videoMobileUrl, videoDesktopUrl

	const {query, options} = data
	const q = useQuery({query, options});
	$: ({ data: settings } = $q);
	$: headerSVG_dk = settings?.headerSVG_dk || ""
	$: if (settings && settings.bg_video_mobile) videoMobileUrl = getFile(settings.bg_video_mobile, client.config()).asset.url || null
	$: if (settings && settings.bg_video_desktop) videoDesktopUrl = getFile(settings.bg_video_desktop, client.config()).asset.url || null
</script>

<svelte:window bind:innerWidth={windowWidth}></svelte:window>

{#if $isPreviewing}
	<a href={`/preview/disable?redirect=${$page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if}

{#if windowWidth < 768}
	<video src={videoMobileUrl} autoplay muted loop class="bg-video"></video>
{:else}
	<video src={videoDesktopUrl} autoplay muted loop class="bg-video"></video>
{/if}

<div class="container">
	<header class="header">	

		<a class="header__title" id="logo-link" href="/">{#if windowWidth < 768}{@html settings?.headerSVG}{:else}{@html headerSVG_dk}{/if}</a>
		<a class="header__title" href="/" id="info-link" class:active={$page.url.pathname==="/"}>Info</a>
		<a class="header__title"  href="/portfolio" id="portfolio-link" class:active={$page.url.pathname==="/portfolio"}>Portfolio</a>
	</header>
	<slot />
	{#if $page.url.pathname==="/"}
		<footer class="footer-info" in:fade>
			<div class="dk-only">New York City</div>
			{#if settings?.careers_link}<a href={settings?.careers_link} class="dk-only secondary">Careers</a>{/if}
			<div>
				{#if settings?.footerSVG}{@html settings?.footerSVG}{/if}	
			</div>
			{#if settings?.data_room_link}<a href={settings?.data_room_link} class="dk-only secondary">Data Room</a>{/if}
			{#if settings?.investor_link}<a href={settings?.investor_link}>[Investor Login]</a>{/if}
		</footer>
	{:else}
	<footer class="footer-portfolio" in:fade>
		<a href={settings?.investor_link} class="investor-link">[Investor Login]</a>
		<div class="footer-text">
			<span>Rose Street Capital</span>
			<span>New York City</span>
		</div>
		{#if settings?.footer_image}
			<div class="footer-img">
				<img src={urlFor(settings?.footer_image)} alt="dithered rose">
			</div>
		{/if}
	</footer>	
	{/if}
</div>

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}

<style>
	@font-face {
		font-family: 'NB International';
		font-style: normal;
		font-weight: 300;
		src: url('/fonts/NB International Regular.otf') format('opentype');
	}
	@font-face {
		font-family: 'Neue Machina';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/Neue-Machina-Inktrap.otf') format('opentype');
	}
	:root {
		font-family: 'NB International';
	}

	.bg-video {
		position: fixed;
		z-index: -1;
		pointer-events: none;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.container {
		margin: 0 auto;
		height: 100vh;
		display: flex;
		flex-direction: column;
		animation: fadein 0.6s;
	}
	@keyframes fadein {
		0%   { opacity: 0; }
		100% { opacity: 1; }
	}

	.header {
		display: grid;
		grid-template-areas: 
			"logo info"
			"logo portfolio";
		z-index: 10;
		padding: 30px 15px;
	}
	header a {
		text-decoration: none;
	}
	#logo-link {
		grid-area: logo;
		color: black;
		text-decoration: none;
		text-transform: uppercase;
		font-family: 'NB International';
		font-size: 28px;
		font-weight: 700;
		letter-spacing: 1.5px;
	}
	#info-link {
		grid-area: info;
		position: relative;
		color: black;
		text-decoration: none;
		text-transform: uppercase;
		font-family: 'NB International';
		font-size: 20px;
		font-weight: 400;
		letter-spacing: 1px;
		justify-self: end;
	}
	#portfolio-link {
		grid-area: portfolio;
		position: relative;
		color: black;
		text-decoration: none;
		text-transform: uppercase;
		font-family: 'NB International';
		font-size: 20px;
		font-weight: 400;
		letter-spacing: 1px;
		align-self: end;
		justify-self: end;
	}

	#info-link::before, #portfolio-link::before {
        content: "";
        height: 20px;
        aspect-ratio: 1 / 1;
        background: black;
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: 0%;
        transform: translateX(-140%) scale(0.001) ;
		transform-origin: center;
        opacity: 0;
		transition: all 0.1s linear;
    }
    #info-link.active::before, #portfolio-link.active::before,#info-link:hover::before, #portfolio-link:hover::before {
        content: "";
        height: 20px;
        aspect-ratio: 1 / 1;
        background: black;
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: 0%;
        transform: translateX(-140%) scale(1) ;
		transform-origin: center;
        opacity: 1;
        transition: all 0.1s linear;
    }

	.footer-info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.footer-info > * {
		margin-bottom: 80px;
		font-size: 20px;
		color: black;
		text-decoration: none;
		text-transform: uppercase;
	}
	.footer-info .dk-only {
		display: none;
	}
	.footer-portfolio {
		border-top: 1px solid black;
		padding: 20px;
		display: grid;
		grid-template-areas: 
			"investor img"
			"text img";
	}
	.footer-portfolio .investor-link {
		grid-area: investor;
		text-transform: uppercase;
		font-size: 20px;
		text-decoration: none;
		color: black;
	}
	.footer-portfolio .footer-text {
		grid-area: text;
		display: flex;
		flex-direction: column;
		text-transform: uppercase;
		font-size: 20px;
		text-decoration: none;
		color: black;
		align-self: end;
	}
	.footer-portfolio .footer-img {
		grid-area: img;
		align-self: end;
		justify-self: end;
	}
	.footer-portfolio .footer-img img {
		display: block;
	}


	@media only screen and (min-width: 575px) {
		.header {
			position: unset;
			border-bottom: none;
			background: unset;
			grid-template-columns: 1fr 2fr 1fr;
			width: 100%;
			grid-template-areas: "info logo portfolio";
			padding: 30px 0;
		}
		#logo-link {
			text-align: center;
			font-size: 40px;
		}
		#portfolio-link {
			text-align: right;
			margin-right: 24px;
			font-size: 32px;
		}
		#info-link {
			margin-left: 24px;
			font-size: 32px;
			justify-self: start;
		}

		#info-link::before, #portfolio-link::before {
			height: 32px !important;
			top: -2px !important;
		}
		#info-link::before {
			right: 0;
			left: unset !important;
			transform: translateX(140%) scale(0.01) !important;
		}
		#info-link.active::before, #info-link:hover::before {
			right: 0;
			left: unset !important;
			transform: translateX(140%) scale(1) !important;
		}

		.footer-info {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 0 24px 32px;
		}
		.footer-info > * {
			margin-bottom: 0px;
			font-size: 20px;
			color: black;
			text-decoration: none;
			text-transform: uppercase;
			position: relative;
		}
		.footer-info svg {
			position: absolute;
			bottom: 0;
			transform: translateY(50%);
		}
		.footer-info .secondary {
			text-decoration: underline;
			color: #787878;
			text-underline-offset: 4px;
		}
		.footer-info .dk-only {
			display: block;
		}
		.footer-portfolio {
			border-top: none;
			display: grid;
			padding: 0 24px 32px;
			grid-template-areas: 
				"img ."
				"text investor";
		}
		.footer-portfolio .investor-link {
			grid-area: investor;
			text-align: right;
		}
		.footer-portfolio .footer-text span:first-child {
			display: none;
		}

		.footer-portfolio .footer-img {
			grid-area: img;
			justify-self: start;
			margin-bottom: 10px;
		}
	}


	/* Preview only: */
	.preview-toggle {
		backdrop-filter: blur(12px);
		border-radius: 0.25rem;
		bottom: 1rem;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		color: #1f2937;
		display: block;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1rem;
		padding-bottom: 0.5rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		position: fixed;
		right: 1rem;
		text-align: center;
		text-decoration: none;
		z-index: 50;
	}

	.preview-toggle:hover {
		background-color: #ef4444;
		color: #ffffff;
	}

	.preview-toggle span:first-child {
		display: block;
	}
	.preview-toggle:hover span:first-child {
		display: none;
	}

	.preview-toggle span:last-child {
		display: none;
	}
	.preview-toggle:hover span:last-child {
		display: block;
	}
</style>
