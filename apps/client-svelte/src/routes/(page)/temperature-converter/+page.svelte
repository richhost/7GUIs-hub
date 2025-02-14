<script lang="ts">
	import Input from '$lib/components/ui/input.svelte';
	import Preview from '$lib/components/ui/preview.svelte';

	class Temperature {
		#c = $state<number | null>(null);
		#f = $state<number | null>(null);

		get c() {
			return this.#c;
		}

		set c(c) {
			this.#c = c;
			this.#f = c === null ? null : c * (9 / 5) + 32;
		}

		get f() {
			return this.#f;
		}

		set f(f) {
			this.#f = f;
			this.#c = f === null ? null : (f - 32) * (5 / 9);
		}
	}

	const temperature = new Temperature();
</script>

<h1 class="font-head">Temperature Converter</h1>

<Preview class="grid grid-cols-2 gap-5">
	<label class="flex flex-col">
		<span>Celsius:</span>
		<Input type="number" bind:value={temperature.c} />
	</label>
	<label class="flex flex-col">
		<span>Fahrenheit:</span>
		<Input type="number" bind:value={temperature.f} />
	</label>
</Preview>

<p>
	Second task of <a
		target="_blank"
		rel="noopener noreferrer"
		href="https://eugenkiss.github.io/7guis/tasks/#temp"
		>The 7 Tasks from 7GUIs
	</a>.
</p>
