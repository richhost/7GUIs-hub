<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = { min?: number; value?: number; max?: number } & SvelteHTMLElements['div'];

	let { class: className, min = 0, value = $bindable(0), max = 100, ...props }: Props = $props();

	const percentage = $derived(max === 0 ? 0 : (1 - (value - min) / (max - min)) * 100);
</script>

<div
	role="progressbar"
	aria-valuemin={min}
	aria-valuemax={max}
	aria-valuenow={value}
	class="border-2 flex items-center justify-center overflow-hidden h-4 relative {className}"
	{...props}
>
	<div
		class="absolute w-full h-full bg-amber-400 transition-all"
		style="transform: translateX(-{percentage}%)"
	></div>
</div>
