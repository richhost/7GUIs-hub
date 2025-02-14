<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Preview from '$lib/components/ui/preview.svelte';

	let count = $state(0);
</script>

<h1 class="font-head">Counter</h1>

<Preview>
	<p class="text-5xl mb-4">{count}</p>
	<Button onclick={() => count++}>Increment</Button>
</Preview>

<p>
	First task of <a
		target="_blank"
		rel="noopener noreferrer"
		href="https://eugenkiss.github.io/7guis/tasks#counter"
		>The 7 Tasks from 7GUIs
	</a>.
</p>
