<template>
  <section id="contacts" class="w-full h-screen -mt-24 text-black bg-offwhite">
    <div class="flex items-center justify-between h-full">
      <!-- left section -->
      <div
        class="relative w-[60%] h-full flex flex-col justify-center items-center"
      >
        <h3 class="text-5xl font-bold mb-4">Связаться с нами</h3>
        <h4 class="text-xl font-thin mb-8">
          В течение 2 часов мы с вами свяжемся
        </h4>

        <SectionContactsForm class="w-1/2" />

        <div class="absolute bottom-24 w-1/2 px-1">
          <SectionContactsFooter />
        </div>
      </div>

      <!-- right section -->
      <div class="w-[40%] h-full">
        <iframe
          class="w-full h-full grayscale"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb8ba7e3fac06a60151b764e7ed018d38ccb08a38aa383c5564cae38283e197e&amp;source=constructor"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>
