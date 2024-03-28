<script>
	import LogoSvg from './logoSvg.svelte';
</script>

<a href="/" class="logo"><LogoSvg></LogoSvg> christophschroers</a>

<style>
    .logo {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		/* width: 100%;
		height: 100%; */

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
</style>