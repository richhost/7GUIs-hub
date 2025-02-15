<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	let {
		class: className,
		value = $bindable(),
		...props
	}: Exclude<SvelteHTMLElements['input'], 'type'> = $props();
</script>

<input type="range" bind:value class="slider {className}" {...props} />
