<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="
      cn('not-prose bg-white shadow-neo-xl mx-auto p-5 border', props.class)
    "
  >
    <slot></slot>
  </div>
</template>
