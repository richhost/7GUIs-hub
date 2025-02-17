<script setup lang="ts">
import Button from "~/components/ui/button.vue";
import Preview from "~/components/ui/preview.vue";

const count = ref(0);

definePageMeta({
  layout: "page",
});
</script>

<template>
  <h1 class="font-head">Counter</h1>

  <Preview class="">
    <p class="text-5xl mb-4">{{ count }}</p>
    <Button @click="count++">Increment</Button>
  </Preview>
</template>
