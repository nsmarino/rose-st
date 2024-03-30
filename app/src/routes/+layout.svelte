<script lang="ts">
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../components/LiveMode.svelte';
	console.log($page.url.pathname)
</script>

{#if $isPreviewing}
	<a href={`/preview/disable?redirect=${$page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if}

<div class="container">
	<header class="header">		
		<a class="header__title" id="logo-link" href="/">Rose Street Capital</a>
		<a class="header__title" id="info-link" href="/">Info</a>
		<a class="header__title" id="portfolio-link" href="/portfolio">Portfolio</a>
	</header>
	<slot />
	{#if $page.url.pathname==="/"}
		<footer class="footer-info">
			<div class="dk-only">New York City</div>
			<div class="dk-only">Careers</div>
			<div>
				<svg width="21" height="44" viewBox="0 0 21 44" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="Group 19">
					<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M10.7907 12.9546C10.7321 13.2806 10.9949 13.3859 11.2909 13.3911C11.6006 13.3963 11.9005 13.2911 12.1408 13.118L13.8259 11.9033C14.1971 11.6364 14.3408 11.1912 14.1854 10.7895L12.1759 5.57423C12.09 5.35077 11.8018 5.24991 11.5644 5.35599C10.6305 5.77335 9.71221 5.71596 9.37518 5.30642C9.03424 4.89254 8.24002 4.86732 8.40219 5.21773C8.56435 5.56814 9.37616 6.74371 9.69951 7.44366C9.95057 7.98536 11.1424 10.9912 10.7907 12.9546Z" fill="black"/>
					<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M7.84555 2.76533C7.95335 2.84151 7.93573 2.99115 7.81653 3.05464C7.37706 3.28863 6.75931 3.51899 6.83808 3.96702C6.86711 4.1339 7.32938 4.33977 7.55845 4.64088C8.53897 5.92692 10.4088 9.17104 10.4731 11.9254C10.5518 15.3155 9.06654 16.1799 8.52238 14.4041C8.29539 13.6622 7.67764 12.0288 6.93241 10.6902C6.65048 10.1832 5.88866 8.99146 5.74252 8.43007C5.57046 7.77072 5.09885 4.31619 5.90006 3.60606C7.08684 2.55492 7.6196 2.60661 7.84555 2.76533Z" fill="black"/>
					<path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M17.1567 6.56989C15.9723 3.52921 16.3464 3.61163 15.0981 2.79099C13.8498 1.97034 12.9678 2.7883 12.7679 1.99632C12.5681 1.20524 11.0372 -0.0203492 9.50735 0.000256492C7.97749 0.0208622 7.78158 0.951702 6.52047 1.26168C5.25937 1.57167 3.91065 2.12712 3.97366 3.27656C4.03666 4.426 2.938 4.86768 3.52572 5.40701C4.02682 5.86661 4.9404 7.69873 5.37062 7.61809C5.45036 7.60286 5.52124 7.42637 5.5114 7.22479C5.4602 6.19989 4.30247 3.22818 6.77151 2.56253C9.17854 1.9139 9.41973 2.51057 9.05056 2.79546C9.05056 2.79546 8.61247 3.1592 7.72054 3.43335C7.16727 3.60357 7.4567 4.22622 7.97749 4.32925C8.89403 4.51111 9.29175 4.7333 9.68652 5.02536C10.0813 5.31742 11.1465 5.07911 11.4753 4.88829C11.8189 4.6885 11.9154 4.60877 12.1792 4.24234C12.4509 3.86427 12.3899 3.20579 11.8592 2.93254C11.8346 2.92 11.8041 2.90208 11.7431 2.88864C11.6722 2.87251 11.6338 2.85639 11.5275 2.85728H11.5265C11.4792 2.86087 11.432 2.86535 11.3847 2.87072C11.3739 2.87162 11.3591 2.8743 11.3552 2.8743C11.3286 2.87789 11.301 2.88237 11.2745 2.88685C11.1721 2.90387 11.0697 2.92447 10.9693 2.95135C10.922 2.96389 10.8758 2.97733 10.8295 2.99256C10.8029 3.00063 10.7773 3.01048 10.7517 3.01944C10.7468 3.02123 10.7429 3.02213 10.7409 3.02302C10.7369 3.02482 10.732 3.02661 10.7251 3.03019C10.6375 3.06871 10.5519 3.10903 10.4721 3.1601C10.4633 3.16547 10.4554 3.17085 10.4475 3.17622C10.4465 3.17712 10.4465 3.17712 10.4446 3.17801C10.4249 3.19324 10.4052 3.20848 10.3865 3.2246C10.3589 3.24789 10.3343 3.27388 10.3097 3.29896C10.3038 3.30613 10.2831 3.33032 10.2792 3.33659C10.2693 3.35092 10.2595 3.36526 10.2496 3.38049C10.2408 3.39482 10.2339 3.40916 10.226 3.42349C10.227 3.42439 10.2093 3.46291 10.2063 3.47097C10.1994 3.49068 10.1935 3.51129 10.1886 3.53189C10.1866 3.53817 10.1817 3.56415 10.1797 3.57311C10.1748 3.61969 10.1738 3.66628 10.1758 3.71197C10.1817 3.83381 10.0587 3.93595 9.92969 3.93595C9.79285 3.93595 9.68948 3.83292 9.68357 3.71197C9.67372 3.5086 9.72492 3.29986 9.84502 3.12605C10.0498 2.82772 10.4012 2.65033 10.7586 2.54372C10.987 2.47563 11.2272 2.43442 11.4694 2.41471C11.6269 2.40216 11.75 2.40844 11.9419 2.43442C12.4982 2.51057 13.0721 3.01048 12.5887 4.19307C12.1054 5.37566 14.0418 9.70823 14.4661 10.3972C14.8904 11.0861 14.7162 11.6317 15.806 11.4391C16.8958 11.2465 18.341 9.61058 17.1567 6.56989Z" fill="black"/>
					<path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M7.86652 16.7537C7.86652 16.7537 8.88512 17.1432 8.79425 16.2096C8.70437 15.2759 5.37095 6.68254 2.70162 5.097C0.0322833 3.51147 0.0961956 4.39171 0.00532038 5.097C-0.0855548 5.8023 1.02192 6.81421 0.718341 7.82612C0.414758 8.83803 1.68302 12.359 4.22153 12.9925C6.76004 13.6259 6.94878 16.2464 7.86652 16.7537Z" fill="black"/>
					<path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M11.2853 14.1956C10.6881 14.6941 8.99227 16.0926 9.24436 16.7238C9.49645 17.3549 12.285 15.0912 14.0496 15.1612C15.8143 15.2311 19.2534 14.3005 20.2153 12.6079C20.9347 11.3421 21.4757 7.35265 20.1067 5.8806C19.7983 5.54979 18.3459 4.26331 17.5285 4.67032C16.8634 5.00203 17.7961 5.85191 18.0337 7.1366C18.405 9.14476 17.9076 11.4407 15.7697 11.7186C14.1165 11.9347 11.7401 13.8164 11.2853 14.1956Z" fill="black"/>
					<path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M9.87723 29.8809C9.681 27.9658 9.26697 26.0828 8.88067 24.1877C8.45226 22.0854 8.19541 19.9863 8.99677 17.9159C9.12108 17.595 8.99677 16.9108 8.67417 16.842C8.35157 16.7731 7.79576 17.2085 7.6807 17.5694C6.54031 21.1563 7.82145 24.7807 8.34644 28.326C8.62588 30.2154 8.74917 32.1185 8.71526 34.0199C8.68342 35.791 8.63205 37.6364 7.9735 39.345C7.3694 40.9119 6.12627 42.6934 3.96159 42.9422C3.30407 43.0175 2.9414 43.4512 2.93319 43.7113C2.92291 44.0282 3.90508 44.0458 4.31706 43.9458C6.19408 43.4872 7.66837 42.3668 8.55191 41.016C9.61525 39.3882 9.85463 37.5364 9.97688 35.7389C10.1104 33.7863 10.0765 31.8288 9.87723 29.8809Z" fill="black"/>
					<path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M9.67297 27.4152C9.71471 27.3539 9.75247 27.313 9.80811 27.2606C10.1837 26.9061 12.4136 25.1753 14.3314 25.2543C16.4499 25.3414 17.8779 25.8319 17.5539 26.2832C17.4337 26.4503 16.3853 27.21 14.5401 26.939C12.0886 26.5773 9.2914 27.9696 9.67297 27.4152Z" fill="black"/>
					<path id="Vector_8" fill-rule="evenodd" clip-rule="evenodd" d="M7.0944 22.037C7.05918 21.9656 7.02698 21.9183 6.9807 21.8565C6.66477 21.4425 4.78726 19.4243 3.17136 19.516C1.38743 19.6173 0.185059 20.1897 0.45773 20.7167C0.559353 20.9116 1.44176 21.7986 2.99528 21.4811C5.05993 21.0603 7.41536 22.6837 7.0944 22.037Z" fill="black"/>
					</g>
				</svg>		
			</div>
			<div class="dk-only">Data Room</div>
			<div>[Investor Login]</div>
		</footer>
	{:else}
	<footer class="footer-portfolio">
		<div class="investor-link">[Investor Login]</div>
		<div class="footer-text">
			<span>Rose Street Capital</span>
			<span>New York City</span>
		</div>
		<div class="footer-img">
			<img src="/rose-st-image.png" alt="dithered rose">
		</div>
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

	.container {
		margin: 0 auto;
		height: 100vh;
	}

	.header {
		display: grid;
		grid-template-areas: 
			"logo info"
			"logo portfolio";
		z-index: 10;
		background: var(--white);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 60px;
	}
	#logo-link {
		grid-area: logo;
	}
	#info-link {
		grid-area: info;
	}
	#portfolio-link {
		grid-area: portfolio;
	}

	.footer-info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.footer-info .dk-only {
		display: none;
	}
	.footer-portfolio {
		border-top: 1px solid black;
		display: grid;
		grid-template-areas: 
			"investor img"
			"text img";
	}
	.footer-portfolio .investor-link {
		grid-area: investor;
	}
	.footer-portfolio .footer-text {
		grid-area: text;
		display: flex;
		flex-direction: column;
	}
	.footer-portfolio .footer-img {
		grid-area: img;
	}


	@media (min-width: 575px) {
		.container {
			display: flex;
			flex-direction: column;
		}

		.header {
			position: unset;
			border-bottom: none;
			background: unset;
			width: 100%;
			grid-template-areas: "info logo portfolio";
		}
		#logo-link {
			text-align: center;
		}

		#portfolio-link {
			text-align: right;
		}
		.footer-info {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
		.footer-info .dk-only {
			display: block;
		}
		.footer-portfolio {
			border-top: none;
			display: grid;
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
