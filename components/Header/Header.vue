<template>
  <div class="flex justify-between items-center w-full h-12">
    <div class="flex items-center">
      <HeaderLogo class="z-[100]"></HeaderLogo>
      <HeaderNavBar class="hidden lg:block"></HeaderNavBar>
    </div>
    <div>
      <div class="flex justify-end">
        <AppButton
          variant="solid"
          class="w-fit rounded-full border-[1px] hidden lg:flex"
        />
        <HeaderMenu class="lg:hidden"></HeaderMenu>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
