<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Preview from '$lib/components/ui/preview.svelte';
	import Progress from '$lib/components/ui/progress.svelte';
	import Slider from '$lib/components/ui/slider.svelte';

	let elapsed = $state(0);
	let duration = $state(0);
	let interval: ReturnType<typeof setInterval>;

	function start() {
		interval = setInterval(() => {
			elapsed += 0.1;
			if (elapsed >= duration) {
				elapsed = duration;
				clearInterval(interval);
			}
		}, 100);
	}

	function reset() {
		elapsed = 0;
		clearInterval(interval);
		start();
	}

	$effect(() => {
		if (!duration) return;
		start();
		return () => clearInterval(interval);
	});
</script>

<h1 class="font-head">Timer</h1>

<Preview class="flex flex-col gap-5">
	<div class="font-head text-center text-2xl">{elapsed.toFixed(1)} / {duration.toFixed(1)}</div>
	<label class="flex items-center gap-2">
		<span>Elapsed Time:</span>
		<Progress class="grow" value={elapsed} max={duration} />
	</label>

	<label class="flex items-center gap-2">
		<span>Duration:</span>
		<Slider class="w-full" bind:value={duration} step={0.1} min={0} max={20} />
	</label>

	<Button onclick={reset}>Reset</Button>
</Preview>

<p>
	Fourth task of <a
		target="_blank"
		rel="noopener noreferrer"
		href="https://eugenkiss.github.io/7guis/tasks/#timer"
		>The 7 Tasks from 7GUIs
	</a>.
</p>
