<script>
	import Tag from "$lib/atoms/Tag/Tag.svelte";

</script>
<div class="portfolio-grid">
	<div class="grid">
		<div class="item">
            <div class="thumb">
                <a href="https://www.hovgaard.com" target="_blank">
                    <enhanced:img class="portrait" src="./hovgaard.com.webp" alt="Hovgaard Website" />
                </a>
            </div>
            <div class="title">Hovgaard Games</div>
            <p>Theme for company and game specific pages.</p>
            <Tag class='-small'>Vitepress</Tag>
            <Tag class='-small'>Vue</Tag>
		</div>
        <div class="item">
            <div class="thumb">
                <a href="https://interim.taskforce.net" target="_blank">
                    <enhanced:img class="portrait" src="./taskforce.net.webp" alt="Taskforce Interim-Management Plattform" />
                </a>
            </div>
            <div class="title">Taskforce</div>
            <p>Applicant management platform for interim management.<span class="note">On behalf of Me & Company GmbH</span></p>
            <Tag class='-small'>Vue</Tag>
            <Tag class='-small'>Express</Tag>
            <Tag class='-small'>Sequelize</Tag>
		</div>
		<div class="item">
            <div class="thumb">
                <a href="https://www.bilstein.com" target="_blank">
                    <enhanced:img class="portrait" src="./bilstein.com.webp" alt="Bilstein Website" />
                </a>
            </div>
            <div class="title">Bilstein</div>
            <p>Wordpress custom theme with Gutenberg Blocks.<span class="note">On behalf of Me & Company GmbH</span></p>
            <Tag class='-small'>Wordpress</Tag>
		</div>
        <div class="item">
            <div class="thumb">
                <a href="https://motorsport.bilstein.com" target="_blank">
                    <enhanced:img class="portrait" src="./motorsport.bilstein.com.webp" alt="Bilstein Motorsport Website" />
                </a>
            </div>
            <div class="title">Bilstein Motorsport</div>
            <p>Marketing Landingpage with scrolling animations.<span class="note">On behalf of Me & Company GmbH</span></p>
            <Tag class='-small'>Vue</Tag>
            <Tag class='-small'>GSAP</Tag>
		</div>
        <div class="item">
            <div class="thumb">
                <a href="https://www.me-company.de" target="_blank">
                    <enhanced:img class="portrait" src="./me-company.de.webp" alt="Me and Company Website" />
                </a>
            </div>
            <div class="title">Me & Company</div>
            <p>Wordpress custom theme.<span class="note">On behalf of Me & Company GmbH</span></p>
            <Tag class='-small'>Wordpress</Tag>
		</div>
	</div>
</div>


<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(12,minmax(0,1fr));
        gap: 2rem;
    }

    .item {
        grid-column: span 6 / span 6;
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
        opacity: .2;
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

        font-size: 1.25em;
        font-weight: 600;
    }

    p {
        font-size: 1em;
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
        transition: transform .4s ease;
    }
</style>