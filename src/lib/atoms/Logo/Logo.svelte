<script>
	import LogoSvg from './logoSvg.svelte';
</script>

<a href="/" class="logo"><LogoSvg></LogoSvg> christophschroers</a>

<style>
	.logo {
		display: flex;
		align-items: center;

		color: var(--text-color);
		font-size: 1em;
		text-decoration: none;
		font-family: 'Noto Serif';

		transition: color 0.4s ease;
	}

	.logo:hover {
		color: var(--heading-color);
	}

	.logo :global(svg) {
		margin-right: 0.5em;
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	.logo :global(svg path) {
		fill: var(--secondary-color);
	}

	@media screen and (min-width: 600px) {
		.logo {
			font-size: 1.35em;
		}

		.logo :global(svg) {
			width: 4em;
			height: 4em;
		}
	}

	@media screen and (min-width: 1200px) {
		.logo {
			justify-content: flex-end;
		}
	}
</style>
