<template>
  <div class="font-['Inter var']">
    <div class="flex flex-col w-full bg-itbtPurple-600">
      <div class="fixed z-50 ml-16 mt-10">
        <Header />
      </div>
      <div class="fixed z-50 w-full mt-10 flex justify-end px-16">
        <ContactUsButton variant="outline" class="w-fit" />
      </div>
      <div class="bg-[#F6F6F9] overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
