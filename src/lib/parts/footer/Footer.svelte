<script>
	import Divider from '$lib/modules/divider/Divider.svelte';
</script>

<footer>
	<Divider />
    <div class="_wrapper">
		<p class="_legal">© {new Date().getFullYear()} Christoph Schrörs. All rights reserved.</p>
        <p class="text-center"></p>
    </div>
</footer>

<style>
	footer {
		padding: 0 2rem;
		width: 100%;
		margin: 0 auto;
	}

	._wrapper {
		padding-top: 1em;
		padding-bottom: 2em;
		flex: 1;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
	}

	._legal {
		margin-top: 1em;
		margin-right: 1em;
		font-size: 0.8em;
		display: inline-block;

		color: var(--text-light-color);
	}

    @media screen and (min-width: 600px) {
        ._wrapper {
            flex-direction: row;
            justify-content: space-between;
        }

		._legal {
			margin-top: 0em;
			margin-bottom: 0;
			margin-right: 0;
		}
    }

	@media (min-width: 900px) {
		footer {
			padding-left: 4em;
			padding-right: 4em;
		}
	}

	@media (min-width: 1200px) {
		footer {
			margin-left: 35%;
			width: calc(100% - 35%);
		}
	}

	@media screen and (min-width: 1600px) {
		footer {
			padding-left: 6em;
			padding-right: 6em;
		}
	}
</style>
