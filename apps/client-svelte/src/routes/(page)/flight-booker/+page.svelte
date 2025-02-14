<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Preview from '$lib/components/ui/preview.svelte';
	import Select from '$lib/components/ui/select.svelte';
	import { getDate } from '$lib/util';

	type Option = 'one-way' | 'return';

	let selected = $state<Option>('one-way');
	let startDate = $state(getDate());
	let returnDate = $state('');
	let dialog: HTMLDialogElement;

	const startDateError = $derived(!startDate);
	const returnDateError = $derived.by(() => {
		if (selected === 'return' && !returnDate) return true;
		if (selected === 'return' && returnDate < startDate) return true;
		return false;
	});

	const disabledBook = $derived(startDateError || returnDateError);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		dialog.showModal();
	}
</script>

<h1 class="font-head">Flight Booker</h1>

<Preview>
	<form onsubmit={handleSubmit} class="flex flex-col gap-5">
		<label class="flex flex-col">
			<span>Select Trip Type:</span>
			<Select bind:value={selected}>
				<option value="one-way">one-way flight</option>
				<option value="return">return flight</option>
			</Select>
		</label>

		<label class="flex flex-col">
			<span class={startDateError ? 'text-red-600' : ''}>Flight Date:</span>
			<Input bind:value={startDate} type="date" />
		</label>

		<label class="flex flex-col">
			<span class={returnDateError ? 'text-red-600' : ''}>Return Date:</span>
			<Input bind:value={returnDate} type="date" disabled={selected !== 'return'} />
		</label>

		<Button disabled={disabledBook} type="submit" class="mt-4">Book</Button>
	</form>

	<dialog
		bind:this={dialog}
		class="backdrop:backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full"
	>
		<div class="border-2 shadow-neo-md p-5">
			<h2 class="font-head">Booked Flight</h2>
			<p>
				You have booked a {selected} flight on {startDate}
				{#if selected === 'return'}
					{' '}& returning on {returnDate}
				{/if}
			</p>
			<div class="flex justify-end mt-5">
				<Button onclick={() => dialog.close()}>OK</Button>
			</div>
		</div>
	</dialog>
</Preview>

<p>
	Third task of <a
		target="_blank"
		rel="noopener noreferrer"
		href="https://eugenkiss.github.io/7guis/tasks/#flight"
		>The 7 Tasks from 7GUIs
	</a>.
</p>
