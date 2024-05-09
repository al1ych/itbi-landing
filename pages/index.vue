<template>
  <!-- <body class="font-thin bg-emerald-800"> -->
  <body class="font-thin bg-offwhite">
    <SectionMain />
    <div class="h-screen">
      <SectionProjects class="text-black" />
    </div>
    <SectionMultisection initSectionIndex="0" isScroll="true" />
    <SectionContacts />

    <div class="bg-black h-[35vh] w-full px-6 lg:hidden">
      <Footer />
    </div>

    <UNotifications />
  </body>
</template>
