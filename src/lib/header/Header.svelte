<script>
	import Logo from './logo.svelte';
</script>

<header>
	<div class="corner">
		<a href="/" class="logo"><Logo></Logo> christophschroers</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;

		color: var(--text-color);
		text-decoration: none;
		font-family: 'Noto Serif';

		transition: color .4s ease;
	}

	.logo:hover {
		color: var(--heading-color);
	}

	.logo :global(svg) {
		margin-right: 0.5em;
		width: 4em;
		height: 4em;
		object-fit: contain;
	}

	.logo :global(svg path) {
		fill: var(--secondary-color);
	}

	@media screen and (max-width: 600px) {
		header {
			flex-direction: column;
		}
	}
</style>
