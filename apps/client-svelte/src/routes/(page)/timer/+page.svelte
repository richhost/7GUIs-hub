<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Preview from '$lib/components/ui/preview.svelte';
	import Progress from '$lib/components/ui/progress.svelte';
	import Slider, { type ValueChangeDetails } from '$lib/components/ui/slider.svelte';

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

	function durationValueChange(details: ValueChangeDetails) {
		const [value] = details.value;
		duration = value;
		clearInterval(interval);
		start();
	}

	$effect(() => {
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

	<Slider
		label="Duration:"
		value={[duration]}
		onValueChange={durationValueChange}
		min={0}
		max={20}
	/>

	<Button onclick={reset}>Reset</Button>
</Preview>
