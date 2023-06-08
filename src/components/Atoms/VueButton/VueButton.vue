<script setup lang="ts">
import { PropType } from 'vue';

interface Props {
  title: string;
  className: string;
}

const props = defineProps({
  title: {
    type: String as PropType<Props['title'] | ''>,
    required: true,
  },
  className: {
    type: String as PropType<Props['className'] | ''>,
    required: true,
  },
});
</script>

<template>
  <button class="button" :class="className">{{ title }}</button>
</template>
