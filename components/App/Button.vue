<script lang="js" setup>
  // props
  defineProps(['variant', 'text', 'to', 'onClick', 'disabled']);
</script>

<template>
  <UButton
    :variant="variant"
    class="transition h-10 px-8 text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black group flex items-center justify-center bg-itbtPurple-700"
    :to="to || '/#contacts'"
    @click="onClick"
    :disabled="disabled || false"
  >
    <span class="font-light">{{ text || "Связаться" }}</span>
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      class="w-4 h-4 ml-2 group-hover:stroke-black"
    >
      <path
        d="M3.33325 8H12.6666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 3.33334L12.6667 8.00001L8 12.6667"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </UButton>
</template>
