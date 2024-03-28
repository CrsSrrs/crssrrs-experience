<script>
    import Tag from "$lib/atoms/Tag/Tag.svelte";
</script>

<div class="skills">
    <h4>
        <span class="line-indicator">~/skills</span>
        <span class="skill-head">Languages</span>
    </h4>
    <ul>
        <li><Tag>JavaScript</Tag></li>
        <li><Tag>TypeScript</Tag></li>
        <li><Tag>HTML5</Tag></li>
        <li><Tag>CSS3</Tag></li>
        <li><Tag>SASS</Tag></li>
        <li><Tag>PHP</Tag></li>
        <li><Tag>SQL</Tag></li>
    </ul>
    <h4>
        <span class="line-indicator">~/skills</span>
        <span class="skill-head">Frameworks</span>
    </h4>
    <ul>
        <li><Tag>Vue</Tag></li>
        <li><Tag>Svelte</Tag></li>
        <li><Tag>Nest</Tag></li>
        <li><Tag>Adonis</Tag></li>
        <li><Tag>Express</Tag></li>
        <li><Tag>Node</Tag></li>
        <li><Tag>Laravel</Tag></li>
        <li><Tag>Wordpress</Tag></li>
    </ul>
    <h4>
        <span class="line-indicator">~/skills</span>
        <span class="skill-head">Tools</span>
    </h4>
    <ul>
        <li><Tag>Git</Tag></li>
        <li><Tag>Vite</Tag></li>
        <li><Tag>Webpack</Tag></li>
        <li><Tag>Twig</Tag></li>
        <li><Tag>Sequelize</Tag></li>
        <li><Tag>Prisma</Tag></li>
        <li><Tag>Nginx</Tag></li>
        <li><Tag>Apache</Tag></li>
        <li><Tag>Bash</Tag></li>
    </ul>
    <h4>
        <span class="line-indicator">~/skills</span>
        <span class="skill-head">Methodologies</span>
    </h4>
    <ul>
        <li><Tag>Agile</Tag></li>
        <li><Tag>Atomic Design</Tag></li>
        <li><Tag>Clean Code</Tag></li>
        <li><Tag>Responsive</Tag></li>
        <li><Tag>Animations</Tag></li>
        <li><Tag>MVC</Tag></li>
        <li><Tag>SOA</Tag></li>
        <li><Tag>REST</Tag></li>
        <li><Tag>CI/CD</Tag></li>
    </ul>
</div>

<style>
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

	h4 {
		line-height: 1;
	}

    ul {
		padding: 0;
    }

	ul:not(:last-child) {
		margin-bottom: 2rem;
	}

	li {
		display: inline-block;
	}
</style>