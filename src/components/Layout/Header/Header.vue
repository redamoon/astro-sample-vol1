<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="bg-blue-500">
    <h1>{{ title }}</h1>
  </header>
</template>
