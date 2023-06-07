<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-sky-500 p-5">
    <h1>{{ title }}</h1>
  </div>
</template>
