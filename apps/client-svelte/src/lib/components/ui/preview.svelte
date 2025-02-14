<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['div'];

	const { class: className, children, ...props }: Props = $props();
</script>

<div class="not-prose mx-auto p-5 border {className}" {...props}>
	{@render children?.()}
</div>
