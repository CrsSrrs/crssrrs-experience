<script>
	import Swimmer from './swimming.svelte';
	import Biker from './cycling.svelte';
	import Runner from './running.svelte';
</script>

<section class="intro">
	<slot />
	<div class="icons">
		<Swimmer />
		<Biker />
		<Runner />
	</div>
</section>

<style>
	.intro {
		justify-content: center;
		align-items: center;
		padding-top: 5vh;
		margin-bottom: 3rem;

		border-bottom: 1px solid var(--primary-light-color);

		position: relative;
	}

	.intro :global(pre) {
		display: inline;
		color: var(--tertiary-color);
	}

	.icons {
        margin-top: 4rem;
		width: 100%;
		height: 0.5rem;

        border-left: 1px solid var(--primary-light-color);
        border-right: 1px solid var(--primary-light-color);

        position: relative;
	}

    .icons::before, .icons::after {
        content: '';
        width: 1px;
        height: 100%;

        background-color: var(--primary-light-color);

        position: absolute;
        bottom: 0;
    }

    .icons::before {
        left: 9.38%;
    }

    .icons::after {
        left: 62.5%;
    }

	.icons :global(svg) {
		width: 2rem;
		height: 2rem;
		display: block;

		position: absolute;
        bottom: 0;

        transform: translateX(-50%);
	}

	.icons :global(svg:nth-child(1)) {
        width: 2.5rem;
        height: 2.5rem;
		left: 4.5%;
        transform: translate(-50%, 30%);
	}

	.icons :global(svg:nth-child(2)) {
        width: 2.25rem;
        height: 2.25rem;
		left: 31.25%;
        transform: translate(-50%, 10%);
	}

	.icons :global(svg:nth-child(3)) {
		left: 81.25%;
	}
</style>
