<script setup lang="ts">
import { Option } from './type';
import { PropType } from 'vue';
const { title } = defineProps({
  title: {
    type: String as PropType<Option['title'] | ''>,
    required: true,
  },
  href: {
    type: String as PropType<Option['href'] | ''>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-sky-500 p-5">
    <h1>
      <a :href="href">{{ title }}</a>
    </h1>
  </div>
</template>
