<script>
	import Intro from '$lib/intro/Intro.svelte';
</script>

<svelte:head>
	<title>Christoph Schrörs - Web Development</title>
	<meta name="description" content="Christoph Schrörs Web Development" />
</svelte:head>

<Intro>
	<h1>Hi. I'm Christoph. Web Developer.</h1>
	<h2>
		Full-Stack is my <pre>profession.</pre>
		Frontend is my
		<pre>passion.</pre>
	</h2>
</Intro>
<section class="why">
	<p>
		I want people to feel something by the things i create. With <i>love</i> for detail,
		<i>passion</i>
		for UI effects and <i>dedication</i> to intuitive user experience, the things i create come to life.
	</p>
	<p>
		I am an expert for Vue.js and Wordpress. I strive to
		learn and do new things. Here is my current skillset:
	</p>
</section>
<section class="how">
	<div class="skills">
		<h3>
			<span class="line-indicator">~/skills</span>
			<span class="skill-head">Languages</span>
		</h3>
		<ul>
			<li>JavaScript</li>
			<li>TypeScript</li>
			<li>HTML5</li>
			<li>CSS3</li>
			<li>SASS</li>
			<li>PHP</li>
			<li>SQL</li>
		</ul>
		<h3>
			<span class="line-indicator">~/skills</span>
			<span class="skill-head">Frameworks</span>
		</h3>
		<ul>
			<li>Vue</li>
			<li>Svelte</li>
			<li>Express</li>
			<li>Node</li>
			<li>Wordpress</li>
		</ul>
		<h3>
			<span class="line-indicator">~/skills</span>
			<span class="skill-head">Tools</span>
		</h3>
		<ul>
			<li>Git</li>
			<li>Webpack</li>
			<li>Twig</li>
			<li>Nginx</li>
			<li>Apache</li>
			<li>Bash</li>
			<li>Docker</li>
		</ul>
		<h3>
			<span class="line-indicator">~/skills</span>
			<span class="skill-head">Methodologies</span>
		</h3>
		<ul>
			<li>Agile</li>
			<li>Atomic Design</li>
			<li>Clean Code</li>
			<li>Responsive</li>
			<li>Animations</li>
			<li>REST</li>
			<li>CI/CD</li>
		</ul>
	</div>
</section>
<section class="what">
	<p>
		In collaboration I always think along, question critically and like to contribute with my own
		ideas. I can also act in an advisory role when finding solutions.
	</p>
	<p>
		I am based in Germany. I go on vacation by bike. I do triathlon to challenge me. I absolutely
		love music. I play games.
	</p>
	<p>
		Feel free to contact me: <a href="mailto:dev@christophschroers.de">dev@christophschroers.de</a>
	</p>
</section>

<style>
	h1,
	h2 {
		width: 100%;
	}

	.why,
	.what {
		margin-bottom: 2rem;
	}

	.how {
		margin-bottom: 1em;
	}

	.skill-head {
		display: inline-block;
		vertical-align: middle;
	}

	.line-indicator {
		margin-right: 1.5em;
		padding-left: 1.25em;
		padding-right: 0.5em;
		padding-top: 0.25em;
		padding-bottom: 0.25em;

		background-color: var(--secondary-color);
		display: inline-block;
		vertical-align: middle;

		position: relative;

		font-family: var(--font-mono);
		font-size: 1rem;
		text-align: center;
		color: var(--primary-color);
		line-height: 1;
	}

	.line-indicator::before,
	.line-indicator::after {
		content: '';
		width: 0;
		height: 0;
		border-top: 0.75em solid transparent;
		border-bottom: 0.75em solid transparent;
		display: inline-block;

		position: absolute;
		top: 0;
	}

	.line-indicator::before {
		border-left: 0.75em solid var(--primary-color);
		left: 0;
	}

	.line-indicator::after {
		border-left: 0.75em solid var(--secondary-color);
		left: 100%;
	}

	.skills h3 {
		line-height: 1;
	}

	.skills ul {
		margin-bottom: 2rem;
		padding: 0;
		color: var(--text-color);
		font-family: var(--font-mono);
	}

	.skills li {
		padding: 0.25rem 0.5rem;
		margin-bottom: 0.55rem;

		display: inline-block;
		background-color: var(--primary-light-color);
		border-radius: 2px;

		font-size: 16px;
		font-weight: bold;
	}
</style>
