<script>
	import GitHub from './github.svelte';
	import LinkedIn from './linkedin.svelte';
	import Instagram from './instagram.svelte';
	import Mail from './mail.svelte';
</script>

<a href="mailto:dev@christophschroers.de" class="social" target="_blank" title="E-Mail"><Mail /></a>
<a href="https://github.com/crssrrs" class="social" target="_blank" title="GitHub"><GitHub /></a>
<a
	href="https://linkedin.com/in/christoph-schr%C3%B6rs-44a86723b/"
	class="social"
	target="_blank"
	title="LinkedIn"><LinkedIn /></a
>
<a href="https://instagram.com/chris_muskathmer" class="social" target="_blank" title="Instagram"
	><Instagram /></a
>

<style>
	.social {
		color: var(--text-color);

		&:not(:first-child) {
			margin-left: 0.5em;
		}

		&:not(:last-child) {
			margin-right: 0.5em;
		}
	}

	.social :global(svg) {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	.social :global(svg path) {
		fill: var(--text-light-color);
		transition: fill 0.4s ease;
	}

	.social:hover :global(svg path) {
		fill: var(--heading-color);
	}
</style>
