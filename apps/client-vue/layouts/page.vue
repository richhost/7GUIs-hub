<script setup lang="ts">
const navigation = [
  { name: "Counter", link: "/counter" },
  { name: "Temperature Converter", link: "/temperature-converter" },
  { name: "Flight Booker", link: "/flight-booker" },
  { name: "Timer", link: "/timer" },
  { name: "CRUD", link: "/crud" },
];
</script>

<template>
  <div class="md:grid md:grid-cols-[240px_1fr] h-dvh overflow-hidden">
    <aside class="hidden md:flex flex-col">
      <NuxtLink v-for="nav in navigation" :key="nav.name" :to="nav.link">
        {{ nav.name }}
      </NuxtLink>
    </aside>
    <main class="mx-auto prose overflow-y-auto px-5 py-10 w-full">
      <NuxtPage />
    </main>
    <div class="hidden md:block"></div>
  </div>
</template>
