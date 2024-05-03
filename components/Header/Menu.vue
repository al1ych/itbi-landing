<script setup lang="ts">
  const isOpen = ref(false)
</script>

<template>
  <div class="">
    <div
      @click="isOpen = !isOpen"
      class="w-10 h-10 flex items-center justify-center relative rounded-full z-[110] border-[1px] transition"
      :class="{
        'bg-itbtPurple-700': !isOpen,
      }"
    >
      <img
        src="/icons/burger.svg"
        class="absolute transition duration-300"
        :class="{ 'opacity-0': isOpen, 'rotate-180': !isOpen }"
      />
      <img
        src="/icons/close.svg"
        class="absolute transition duration-300"
        :class="{ 'opacity-0': !isOpen, '-rotate-180': isOpen }"
      />
    </div>

    <HeaderLogo
      isTransparent="true"
      class="fixed z-[155] top-8 left-6 lg:left-16"
      @click="isOpen = false"
    ></HeaderLogo>

    <div
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
      class="bg-black h-screen w-screen fixed z-[100] top-0 left-0 transition flex justify-center items-center"
      :class="{
        '-translate-y-[100%]': !isOpen,
      }"
    >
      <!-- modal body -->
      <div
        class="w-full h-full px-6 transition flex flex-col pt-32 pb-24"
        :class="{
          'opacity-0': !isOpen,
          'duration-75': !isOpen,
          'duration-300': isOpen,
        }"
      >
        <HeaderNavBar
          @click="isOpen = false"
          class="flex-auto"
          isVertical="true"
        ></HeaderNavBar>

        <UButton
          variant="ghost"
          class="w-full h-10 text-white border-[1px] flex items-center justify-center"
          to="/#contacts"
          @click="isOpen = false"
        >
          <span class="font-light">Связаться</span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            class="w-4 h-4 ml-2"
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
      </div>
    </div>
  </div>
</template>
