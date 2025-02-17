<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <button
    :class="
      cn(
        'h-10 flex items-center justify-center font-head cursor-pointer px-4 border-2 shadow-neo-md disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-neo-md active:shadow-neo-sm transition',
        props.class
      )
    "
  >
    <slot></slot>
  </button>
</template>
