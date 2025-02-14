<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	let { class: className, value = $bindable(), ...props }: SvelteHTMLElements['input'] = $props();
</script>

<input
	class="h-10 border-2 outline-none focus-within:ring-2 focus-within:ring-offset-2 px-2 min-w-0 max-w-full disabled:cursor-not-allowed disabled:opacity-50 {className}"
	bind:value
	{...props}
/>
