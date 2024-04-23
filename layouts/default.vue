<template>
  <div class="font-['Inter var']">
    <div class="flex flex-col w-full pt-10">
      <div class="fixed z-50 ml-16">
        <Header />
      </div>
      <div class="fixed z-40 w-full flex justify-end px-16">
        <ContactUsButton variant="outline" class="w-fit" />
      </div>
      <div class="">
        <slot />
      </div>
    </div>
  </div>
</template>
