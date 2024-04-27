<script setup lang="ts">
  defineProps(["link", "svg", "title", "subtitle"])
</script>

<template>
  <NuxtLink :to="link">
    <div
      class="w-[300px] h-[400px] bg-[#F8F5FF] flex flex-col justify-between cursor-pointer rounded-2xl"
    >
      <img :src="svg" class="-mt-24" />
      <div class="mx-8 mb-12">
        <div class="flex justify-between items-baseline">
          <h3 class="text-black text-xl font-medium mb-4">{{ title }}</h3>

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
        </div>
        <h4 class="text-black text-md font-thin">{{ subtitle }}</h4>
      </div>
    </div>
  </NuxtLink>
</template>
~/interfaces/project ~/entities/project
