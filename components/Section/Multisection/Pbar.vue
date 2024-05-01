<script setup lang="ts">
  import { computed } from "vue"

  const props = defineProps(["step"])

  const imageSrc = computed(() => {
    return `/illustrations/multisection/pbar/${props.step || 0}.svg`
  })
</script>

<template>
  <img :src="imageSrc" class="pointer-events-none select-none" />
</template>
