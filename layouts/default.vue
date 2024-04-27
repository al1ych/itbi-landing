<template>
  <div class="font-['Inter var']">
    <div
      class="fixed w-full h-24 z-[100] bg-itbtPurple-700 backdrop-filter backdrop-blur-md bg-opacity-70 rounded-b-[20px]"
      name="backdrop"
    ></div>

    <div class="flex flex-col w-full pt-7">
      <div class="fixed z-[150] ml-16">
        <Header />
      </div>
      <div class="fixed z-[140] w-full flex justify-end px-16">
        <AppButton variant="outline" class="w-fit" />
      </div>
      <div class="">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
