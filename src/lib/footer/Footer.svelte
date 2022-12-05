<script>
	import Social from '$lib/social/Social.svelte';
</script>

<footer>
    <div>
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

	footer div {
		padding: 1rem 0;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 1px solid var(--primary-light-color);
	}

	footer .link {
		margin-right: 1em;
		font-size: 0.75em;
		display: inline-block;

		color: var(--text-color);
		text-decoration: underline;
	}

    @media screen and (max-width: 600px) {
        footer div {
            flex-direction: column;
            justify-content: center;
        }
    }
</style>
