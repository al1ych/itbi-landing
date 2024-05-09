<template>
  <!-- <body class="font-thin bg-emerald-800"> -->
  <body class="font-thin bg-offwhite">
    <SectionMain />

    <SectionProjects class="text-black" />

    <SectionMultisection
      initSectionIndex="0"
      isScroll="true"
      class="relative z-10"
    />

    <SectionContacts class="lg:-mt-36" />

    <div class="bg-black h-[35vh] w-full px-6 lg:hidden">
      <Footer />
    </div>

    <UNotifications />
  </body>
</template>
