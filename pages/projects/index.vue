import ContactUsButton from '../components/ContactUsButton.vue';
<template>
  <body class="font-thin bg-offwhite text-offwhite">
    <SectionProjects class="overrides" showAll="true" />

    <img
      src="/backgrounds/backgroundSection1.svg"
      alt="bg"
      class="w-full absolute pointer-events-none select-none -top-[600px] left-0"
    />

    <div class="relative">
      <img
        src="/backgrounds/cutout-ellipse.svg"
        alt="bg"
        class="w-full absolute z-10 -mt-24 h-[30rem] pointer-events-none select-none"
      />

      <SectionContacts class="mt-48 absolute" />
    </div>
  </body>
</template>
