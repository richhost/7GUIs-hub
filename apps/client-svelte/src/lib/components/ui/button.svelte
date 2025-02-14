<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['button'];

	const { children, class: className, ...props }: Props = $props();
</script>

<button
	{...props}
	class="h-10 flex items-center justify-center font-head cursor-pointer px-4 border-2 shadow-neo-md disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-neo-md active:shadow-neo-sm transition {className}"
>
	{@render children?.()}
</button>
