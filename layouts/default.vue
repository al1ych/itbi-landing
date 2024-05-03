<template>
  <div class="font-['Inter var'] bg-itbtPurple-700 w-full overflow-x-hidden">
    <div class="fixed w-full h-24 z-[100]" name="backdrop"></div>

    <div class="flex flex-col w-full pt-7">
      <div class="fixed z-[150] px-6 lg:px-16 w-full">
        <Header />
      </div>
      <div class="w-full bg-offwhite">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
