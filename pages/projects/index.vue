import ContactUsButton from '../components/ContactUsButton.vue';
<template>
  <body class="font-thin bg-offwhite text-offwhite">
    <div class="absolute z-0 top-0 left-0 w-full">
      <div class="bg-itbtPurple-700 h-64 w-full top-0 z-0"></div>
      <img
        src="/backgrounds/backgroundSection1.svg"
        alt="bg"
        class="w-full pointer-events-none select-none top-0 left-0 z-0 translate-y-[-50%]"
      />
    </div>

    <SectionProjects class="mt-48" showAll="true" />

    <div class="bg-offwhite">
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

    <UNotifications />
  </body>
</template>
