<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Preview from '$lib/components/ui/preview.svelte';

	type Person = { name: string; surname: string };

	let people = $state<Person[]>([{ name: 'Rich', surname: 'Harris' }]);
	let prefix = $state('');
	let person = $state<Person>({ name: '', surname: '' });
	let selected = $state<Person>();

	$effect(() => {
		person = { name: selected?.name ?? '', surname: selected?.surname ?? '' };
	});

	const filteredPeople = $derived(
		prefix ? people.filter((p) => p.surname.toLowerCase().startsWith(prefix.toLowerCase())) : people
	);

	function createPerson() {
		if (person.surname && person.name) {
			people.push({ ...person });
			clearField();
		}
	}

	function updatePerson() {
		if (!selected || !person.name || !person.surname) return;
		const index = people.indexOf(selected);
		people[index] = { ...person };
		clearField();
	}

	function deletePerson() {
		if (!selected) return;
		people = people.filter((p) => p !== selected);
		clearField();
	}

	function clearField() {
		person = { name: '', surname: '' };
	}
</script>

<h1 class="font-head">CRUD</h1>

<Preview>
	<label>
		<span>Filter prefix:</span>
		<Input bind:value={prefix} class="grow w-full" />
	</label>

	<form
		onsubmit={(e) => {
			e.preventDefault();
			createPerson();
		}}
		class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"
	>
		<div class="border-2 min-h-40">
			{#each filteredPeople as person}
				<button
					type="button"
					onclick={() => (selected = person)}
					class="px-2 cursor-default w-full text-left {selected === person
						? 'bg-green-500 text-white'
						: ''}"
				>
					{person.surname}, {person.name}
				</button>
			{/each}
		</div>
		<div>
			<label class="flex flex-col mb-5">
				<span>Name: </span>
				<Input required bind:value={person.name} />
			</label>
			<label class="flex flex-col">
				<span>Surname: </span>
				<Input required bind:value={person.surname} />
			</label>
		</div>

		<div class="flex flex-wrap gap-5 md:col-span-2">
			<Button type="submit" class="bg-green-500 text-white">Create</Button>
			<Button type="button" onclick={updatePerson} class="bg-amber-500 text-white">Update</Button>
			<Button type="button" onclick={deletePerson} class="bg-red-500 text-white">Delete</Button>
		</div>
	</form>
</Preview>

<p>
	Fifth task of <a
		target="_blank"
		rel="noopener noreferrer"
		href="https://eugenkiss.github.io/7guis/tasks/#crud"
		>The 7 Tasks from 7GUIs
	</a>.
</p>
