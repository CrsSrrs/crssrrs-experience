<script>
	import Logo from '$lib/atoms/Logo/Logo.svelte';
	import Footer from '$lib/parts/footer/Footer.svelte';
	import { page } from '$app/stores'
</script>

<header>
	<div class="head">
		<Logo></Logo>
	</div>
	<div class="inner">
		<enhanced:img class="portrait" src="./christoph-schroers_320x320px_rund.png" alt="An alt text" />
		<h2>Hi! I am Christoph,<br>Web Developer.</h2>
		<nav>
			<li><a href="#skills" class:-active={$page.url.hash === '#skills'}>Skills</a></li>
			<li><a href="#work" class:-active={$page.url.hash === '#work'}>Portfolio</a></li>
			<li><a href="#contact" class:-active={$page.url.hash === '#contact'}>Contact</a></li>
		</nav>
	</div>
	<Footer />
</header>

<style>
	header {
		padding-top: 4em;
		padding-bottom: 4em;
		padding-left: 6em;
		padding-right: 6em;
		height: 100vh;
		width: 35%;

		background-color: var(--primary-light-color);

		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: flex-end;

		position: fixed;
		left: 0;
		top: 0;

		text-align: right;
	}

	.inner {
		margin: 0 0 2em 0;
	}

	.portrait {
		margin-bottom: 2em;
		width: 10em;
		height: 10em;
	}

	nav {
		margin-top: 4em;
		font-size: 1.25em;
		list-style: none;
	}

	li {
		margin-bottom: 1em;
	}

	a.-active {
		color: var(--accent-color);
		/* font-weight: 600; */
	}

	@media screen and (max-width: 600px) {
		header {
			flex-direction: column;
		}
	}
</style>
