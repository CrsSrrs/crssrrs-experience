<script>
/** @type {string} */
let className = '';

export { className as class };
</script>

<div class={`tag ${className || ''}`}>
    <slot></slot>
</div>

<style>
    .tag {
        padding: 0.25rem 0.5rem;
		margin-bottom: 0.55rem;

		display: inline-block;
		background-color: var(--primary-light-color);
		border-radius: 2px;

        color: var(--text-color);
		font-family: var(--font-mono);
		font-size: 16px;
		font-weight: bold;
    }

    .tag.-small {
        font-size: 12px;
    }
</style>