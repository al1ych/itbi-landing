<template>
  <section id="contacts" class="w-full h-screen text-black bg-offwhite">
    <div class="flex flex-col lg:flex-row items-center justify-between h-full">
      <!-- left section -->
      <div
        class="relative w-full lg:w-[60%] h-full flex flex-col justify-center items-center px-6"
      >
        <h3 class="mb-4 text-4xl sm:text-5xl font-bold">Связаться с нами</h3>
        <h4 class="mb-8 text-md sm:text-xl font-thin text-gray-800">
          В течение 2 часов мы с вами свяжемся
        </h4>

        <SectionContactsForm class="w-full md:w-[55%]" />

        <div class="absolute w-[52%] px-1 bottom-24 hidden lg:block">
          <Footer />
        </div>
      </div>

      <!-- right section -->
      <div class="w-full lg:w-[40%] h-full">
        <iframe
          class="w-full h-full grayscale"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb8ba7e3fac06a60151b764e7ed018d38ccb08a38aa383c5564cae38283e197e&amp;source=constructor"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>
