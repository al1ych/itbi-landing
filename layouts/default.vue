<template>
  <div class="font-['Inter var']">
    <div class="flex flex-col w-full">
      <Header class="sticky" />
      <div class="bg-[#F6F6F9] overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
