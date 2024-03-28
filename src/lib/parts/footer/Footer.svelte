<script>
	import Social from '$lib/modules/social/Social.svelte';
	import Divider from '$lib/modules/divider/Divider.svelte';
</script>

<footer>
	<Divider />
    <div class="_wrapper">
        <p>
            <a href="/imprint" class="link">Imprint</a>
        </p>
        <p class="text-center">
            <Social />
        </p>
    </div>
</footer>

<style>
	footer {
		padding: 0 1rem;
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	._wrapper {
		padding: 1rem 0;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 1px solid var(--primary-light-color);
	}

	.link {
		margin-right: 1em;
		font-size: 0.75em;
		display: inline-block;

		color: var(--text-color);
	}

	.link:hover {
		color: var(--accent-color);
	}

    @media screen and (max-width: 600px) {
        footer div {
            flex-direction: column;
            justify-content: center;
        }
    }
</style>
