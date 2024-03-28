<script>
	import Intro from '$lib/modules/intro/Intro.svelte';
	import Portfolio from '$lib/modules/portfolio/Portfolio.svelte';
	import Skills from '$lib/modules/skills/Skills.svelte';
</script>

<svelte:head>
	<title>Christoph Schrörs - Web Development</title>
	<meta name="description" content="Christoph Schrörs Web Development" />
</svelte:head>

<Intro>
	<h1>
		Full-Stack is my <pre>profession.</pre>
		<br />Frontend is my
		<pre>passion.</pre>
	</h1>
</Intro>
<section class="why">
	<p>
		I want people to feel something by the things I create. With love for detail, passion for UI
		effects and dedication to intuitive user experience, the things I create come to life.
	</p>
	<p>
		I am an expert for <b>Vue.js</b> and <b>Wordpress</b>. I strive to learn and use new
		technologies.
	</p>
</section>
<section class="how" id="skills">
	<Skills />
</section>

<section class="portfolio" id="work">
	<h3>Recent work</h3>
	<Portfolio />
</section>

<section class="contact" id="contact">
	<h3>Get in touch</h3>
	<p>
		In collaboration I always think along, question critically and like to contribute with my own
		ideas. I can also act in an advisory role when finding solutions.
	</p>
	<p>
		I am based in Germany. I travel by bike. I challenge me with triathlons. I absolutely love
		music. I play games.
	</p>
	<p>
		Feel free to contact me: <a href="mailto:dev@christophschroers.de">dev@christophschroers.de</a>
	</p>
</section>

<style>
	h1 {
        margin-bottom: 0;
		width: 100%;
	}

	section:not(:last-child) {
		border-bottom: 2px solid var(--primary-light-color);
		padding-bottom: 5em;
	}

	section:not(:first-child) {
		padding-top: 5em;
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
