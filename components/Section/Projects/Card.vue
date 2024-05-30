<script setup lang="ts">
  defineProps(["link", "svg", "title", "subtitle"])
</script>

<template>
  <a :href="link">
    <div
      class="w-full sm:w-[160px] aspect-[3/4] md:w-[200px] lg:w-[260px] bg-[#F8F5FF] flex flex-col cursor-pointer rounded-2xl"
    >
      <img :src="svg" class="-mt-24" />
      <div class="px-8 sm:px-3 lg:px-8 mb-12">
        <div class="flex justify-between items-baseline">
          <h3 class="text-black text-xl sm:text-md md:text-xl font-medium mb-4">
            {{ title }}
          </h3>

          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            class="w-4 h-4 ml-2 group-hover:stroke-black block sm:hidden md:block"
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

        <h4 class="text-black text-md sm:text-xs md:text-md font-thin">
          {{ subtitle }}
        </h4>
      </div>
    </div>
  </a>
</template>
