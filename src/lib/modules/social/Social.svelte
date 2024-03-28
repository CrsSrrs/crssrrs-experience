<script>
	import GitHub from './github.svelte';
	import LinkedIn from './linkedin.svelte';
	import Instagram from './instagram.svelte';
</script>

<a href="https://github.com/crssrrs" class="social" target="_blank"><GitHub /></a>
<a href="https://linkedin.com/in/christoph-schr%C3%B6rs-44a86723b/" class="social" target="_blank"><LinkedIn /></a>
<a href="https://instagram.com/chris_muskathmer" class="social" target="_blank"><Instagram /></a>

<style>
    .social {
        margin-left: 0.5em;
        margin-right: 0.5em;
		color: var(--text-color);
	}

	.social :global(svg) {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	.social :global(svg path) {
		fill: var(--text-light-color);
		transition: fill .4s ease;
	}

	.social:hover :global(svg path) {
		fill: var(--heading-color);
	}
</style>