<template>
  <!-- <body class="font-thin bg-emerald-800"> -->
  <body class="font-thin bg-offwhite">
    <div class="">
      <SectionMain />
    </div>

    <div class="">
      <SectionProjects class="text-black" />
    </div>

    <SectionMultisection initSectionIndex="0" isScroll="true" />

    <div class="">
      <SectionContacts />
    </div>

    <div class="bg-black h-[35vh] w-full px-6 lg:hidden">
      <Footer />
    </div>

    <UNotifications />
  </body>
</template>
