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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-full absolute z-10 -mt-24 h-[30rem] pointer-events-none select-none"
      >
        <ellipse cx="823" cy="244" rx="823" ry="244" fill="#FCFAFF" />
        <!-- rectangle from 0 0 to halft of ellipse -->
        <rect x="0" y="0" width="823" height="488" fill="#FCFAFF" />
      </svg>

      <SectionContacts class="mt-48 absolute" />
    </div>
  </body>
</template>
