<script lang="ts" setup>
  // title subtitle link
  const props = defineProps<{
    title: string
    subtitle: string
    link: string
  }>()
</script>

<template>
  <div
    class="techCard h-[5rem] rounded-full bg-white w-full mx-2 flex flex-col justify-center items-center"
  >
    <span class="text-sm font-normal text-black">{{ title }}</span>
    <span class="text-[#6A6A6A] font-thin text-xs">{{ subtitle }}</span>
  </div>
</template>
