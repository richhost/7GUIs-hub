<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	let {
		class: className,
		value = $bindable(),
		children,
		...props
	}: SvelteHTMLElements['select'] = $props();
</script>

<select
	class="h-10 border-2 outline-none focus-within:ring-2 focus-within:ring-offset-2 px-2 min-w-0 max-w-full {className}"
	bind:value
	{...props}
>
	{@render children?.()}
</select>
