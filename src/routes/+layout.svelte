<script>
	import Header from '$lib/parts/header/Header.svelte';
	import Footer from '$lib/parts/footer/Footer.svelte';
	import 'normalize.css';
	import '../app.css';
	import { onMount } from 'svelte';
	import { t, initialized } from '$lib/translations';
	let mql = false;

	onMount(() => {
		mql = window.matchMedia('(min-width: 1200px)').matches;
	});
</script>

{#if $initialized}
	<Header />

	<main>
		<slot />
	</main>

	{#if !mql}
		<Footer />
	{/if}
{:else}
	<div>Locale initializing...</div>
{/if}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	main {
		padding-top: 4em;
		padding-bottom: 2em;
		padding-left: 2em;
		padding-right: 2em;
		width: 100%;
		max-width: 1200px;

		display: flex;
		flex: 1;
		flex-direction: column;
	}

	@media (min-width: 900px) {
		main {
			padding-top: 6em;
			padding-bottom: 4em;
			padding-left: 4em;
			padding-right: 4em;
		}
	}

	@media (min-width: 1200px) {
		main {
			margin-left: 35%;
			padding-top: 8em;
			padding-bottom: 6em;
			width: calc(100% - 35%);
		}
	}

	@media screen and (min-width: 1600px) {
		main {
			padding-left: 6em;
			padding-right: 6em;
		}
	}
</style>
