<script>
	import Header from '$lib/parts/header/Header.svelte';
	import 'normalize.css';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	main {
		margin-left: 35%;
		padding-top: 12em;
		padding-bottom: 6em;
		padding-left: 6em;
		padding-right: 6em;
		width: calc(100% - 35%);
		max-width: 1200px;

		display: flex;
		flex: 1;
		flex-direction: column;
	}
</style>
