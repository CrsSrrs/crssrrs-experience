<script>
	import Intro from '$lib/modules/intro/Intro.svelte';
	import Portfolio from '$lib/modules/portfolio/Portfolio.svelte';
	import Skills from '$lib/modules/skills/Skills.svelte';

	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Christoph Schrörs - Web Development</title>
	<meta name="description" content="Christoph Schrörs Web Development" />
</svelte:head>

<section class="what">
	<h1>{$t('what.headline')}</h1>
	<h3 class="subheadline">{$t('what.subheadline')}</h3>
	{#each $t('what.paragraphs') as paragraph}
		<p>{paragraph}</p>
	{/each}
</section>

<section class="how" id="skills">
	<Skills />
</section>

<section class="why">
	<h2>
		{@html $t('why.headline')}
	</h2>
	{#each $t('why.paragraphs') as paragraph}
		<p>{paragraph}</p>
	{/each}
</section>

<section class="portfolio" id="work">
	<h3>{$t('work.headline')}</h3>
	<Portfolio />
</section>

<section class="about">
	<h3>
		{$t('about.headline')}
	</h3>
	{#each $t('about.paragraphs') as paragraph}
		<p>{paragraph}</p>
	{/each}
</section>

<section class="contact" id="contact">
	<h3>{$t('contact.headline')}</h3>
	<p>
		{$t('contact.paragraph1')}
	</p>
	<p>
		{$t('contact.paragraph2')} <a href="mailto:dev@christophschroers.de">dev@christophschroers.de</a>
	</p>
</section>

<style>
	.what h1 {
        margin-bottom: 0;
		width: 100%;
	}

	.what .subheadline {
		margin-bottom: 2.5em;
	}

	section:not(:last-child) {
		border-bottom: 2px solid var(--primary-light-color);
		padding-bottom: 5em;
	}

	section:not(:first-child) {
		padding-top: 5em;
	}

	.what p {
		font-size: 1.4rem;
	}

	.contact {
		margin-bottom: 4em;
	}

	.contact a {
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--tertiary-color);
		text-decoration: none;
	}
</style>
