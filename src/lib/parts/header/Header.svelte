<script>
	import Logo from '$lib/atoms/Logo/Logo.svelte';
	import Footer from '$lib/parts/footer/Footer.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { t, locales, locale } from '$lib/translations';
	let mql = false;

	onMount(() => {
		mql = window.matchMedia('(min-width: 1200px)').matches;
	});

	function changeLocale(newLocale) {
		$locale = newLocale;
	}
</script>

<header>
	<div class="head">
		<Logo></Logo>
	</div>
	<div class="inner">
		<enhanced:img
			class="portrait"
			src="./christoph-schroers_320x320px_rund.webp"
			alt="An alt text"
		/>
		<h2>{$t('headline')}.</h2>
		<h4 class="subheadline">{$t('profession')}</h4>
		<nav>
			<li><a href="/#skills" class:-active={$page.url.hash === '#skills'}>{$t('nav.skills')}</a></li>
			<li><a href="/#work" class:-active={$page.url.hash === '#work'}>{$t('nav.work')}</a></li>
			<li><a href="/#contact" class:-active={$page.url.hash === '#contact'}>{$t('nav.contact')}</a></li>
			<li class="language-switch">
				{#each $locales as currentLocales}
					<a class:-active={$locale === currentLocales} on:click={changeLocale(currentLocales)}>{currentLocales}</a>
				{/each}
			</li>
		</nav>
	</div>
	{#if mql}
		<Footer />
	{/if}
</header>

<style>
	header {
		padding-top: 2em;
		padding-bottom: 2em;
		padding-left: 2em;
		padding-right: 2em;

		background-color: var(--primary-light-color);

		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	.head {
		margin-bottom: 4em;
	}

	.inner {
		margin: 0 0 1em 0;
	}

	h2 {
		margin-bottom: .15em;
	}

	h4 {
		color: var(--text-light-color);
		margin-bottom: 4em;
	}

	.portrait {
		margin-bottom: 2em;
		width: 10em;
		height: 10em;
	}

	nav {
		margin-top: 2em;
		font-size: 1.25em;
		list-style: none;
	}

	li {
		margin-bottom: 1em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		display: inline-block;
	}

	a.-active {
		color: var(--tertiary-color);
	}

	.language-switch a {
		margin-top: .5em;
		padding-top: 1.5em;
		border-top: 2px solid var(--primary-lighter-color);
		display: inline-block;

		font-size: .75em;
		cursor: pointer;

		&:not(:first-child) {
			padding-left: .25em;
		}

		&:not(:last-child) {
			padding-right: .25em;
		}
	}

	@media screen and (min-width: 900px) {
		header {
			padding-top: 2em;
			padding-bottom: 2em;
			padding-left: 4em;
			padding-right: 4em;
		}
	}

	@media screen and (min-width: 1200px) {
		header {
			padding-top: 4em;
			padding-bottom: 4em;

			height: 100vh;
			width: 35%;

			align-items: flex-end;
			justify-content: space-between;

			position: fixed;
			left: 0;
			top: 0;

			text-align: right;
		}

		.head {
			margin-bottom: 0;
		}

		.inner {
			margin: 0 0 2em 0;
		}

		li {
			padding-left: 0;
			padding-right: 0;
			display: list-item;
		}
	}

	@media screen and (min-width: 1600px) {
		header {
			padding-left: 6em;
			padding-right: 6em;
		}
	}
</style>
