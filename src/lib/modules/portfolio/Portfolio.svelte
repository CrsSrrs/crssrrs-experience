<script>
	import Tag from '$lib/atoms/Tag/Tag.svelte';
	import { t } from '$lib/translations';

	const projectImages = import.meta.glob('./*.{webp,jpeg,jpg,png}', {
		eager: true,
		query: {
			enhanced: true
		}
	});
</script>

<div class="portfolio-grid">
	<div class="grid">
		{#each $t('work.projects') as project}
			<div class="item">
				<div class="thumb">
					<a href={project.link} target="_blank">
						{#if projectImages[`./${project.img}`]}
							<enhanced:img
								class="portrait"
								src={projectImages[`./${project.img}`].default}
								alt={project.imgAlt}
							/>
						{/if}
					</a>
				</div>
				<div class="title">{project.title}</div>
				<p>
					{project.description}
					{#if project.note}
						<span class="note">{project.note}</span>
					{/if}
				</p>
				{#each project.tags as tag}
					<Tag class="-small">{tag}</Tag>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 2rem;
		row-gap: 4rem;
	}

	.item {
		grid-column: span 12;
	}

	.item :global(.tag):not(:last-child) {
		margin-right: 0.25em;
	}

	.thumb {
		position: relative;
		border-radius: 0.5em;
		overflow: hidden;
	}

	.thumb::before {
		content: '';
		display: block;
		padding-top: 56%;
	}

	.thumb::after {
		content: '';

		background-color: var(--primary-lighter-color);
		opacity: 0.2;
		pointer-events: none;

		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}

	.title {
		margin-bottom: 0.75em;
		margin-top: 1.25em;

		font-size: 1.3em;
		font-weight: 600;
	}

	p {
		font-size: 1.1em;
	}

	.note {
		padding-top: 0.5em;
		display: block;
		font-size: 0.8em;
		opacity: 0.75;
	}

	a {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	a:hover img {
		transform: scale(1.05);
	}

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		transform: scale(1);
		transition: transform 0.4s ease;
	}

	@media screen and (min-width: 900px) {
		.item {
			grid-column: span 6 / span 6;
		}
	}
</style>
