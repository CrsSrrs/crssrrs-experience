<script>
	import Header from '$lib/header/Header.svelte';
	import 'normalize.css';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		<a href="/imprint">Imprint</a>
	</p>
</footer>

<style>
	main, footer {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0 1rem;
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		justify-content: center;
	}

	footer p {
		padding: 1rem 0;
		border-top: 1px solid var(--primary-light-color);
	}

	footer a {
		margin-right: 1em;
		font-size: 0.75em;
		display: inline-block;

		color: var(--text-color);
		text-decoration: underline;
	}
</style>
