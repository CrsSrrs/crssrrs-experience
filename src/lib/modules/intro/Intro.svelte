<section class="intro">
	<slot />
</section>

<style>
	.intro {
		justify-content: center;
		align-items: center;

		position: relative;
	}

	.intro :global(pre) {
		display: inline;
		color: var(--tertiary-color);
	}
</style>
