<template>
  <div class="font-['Inter var']">
    <div class="flex flex-col w-full">
      <div class="fixed z-50 ml-16 mt-10">
        <Header />
      </div>
      <div class="fixed z-40 w-full mt-10 flex justify-end px-16">
        <ContactUsButton variant="outline" class="w-fit" />
      </div>
      <div class="overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
