<script lang="ts">
	const { children } = $props();

	const navigation = [
		{ name: 'Counter', link: '/counter' },
		{ name: 'Temperature Converter', link: '/temperature-converter' },
		{ name: 'Flight Booker', link: '/flight-booker' },
		{ name: 'Timer', link: '/timer' }
	];
</script>

<div class="md:grid md:grid-cols-[240px_1fr] h-dvh overflow-hidden">
	<aside class="hidden md:flex flex-col">
		{#each navigation as nav}
			<a href={nav.link}>{nav.name}</a>
		{/each}
	</aside>
	<main class="mx-auto prose overflow-y-auto px-5 py-10 w-full">
		{@render children()}
	</main>
</div>
