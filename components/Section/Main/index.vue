<template>
  <!-- мин соотношение сторон 1516 х 1520 -->

  <section class="relative flex flex-col text-white bg-offwhite" name="main">
    <div class="bg-itbtPurple-700">
      <div
        class="relative z-20 flex flex-col justify-between items-center mt-36 md:mt-48 lg:flex-row lg:px-36 xl:px-48 md:px-28 gap-x-[18px]"
      >
        <div class="flex-1 px-auto md:px-0">
          <h1
            class="w-full text-4xl font-medium text-center text-white md:text-5xl lg:text-left md:font-bold 2xl:text-7xl tracking-wide"
          >
            IT решения на <br />
            1С и Битриксе
          </h1>
          <h2
            class="text-[#EEE6FF] lg:text-left text-center text-md md:text-xl font-thin mt-4 tracking-wide"
          >
            Мы специализируемся на разработке и внедрении<br />
            систем ERP, CRM, ECM, а также биллинговых систем для<br />
            автоматизации ключевых бизнес-процессов
          </h2>
          <AppButton
            variant="outline"
            class="w-64 mx-auto mt-10 lg:mx-0"
            text="Оставить заявку"
          />
        </div>

        <div class="flex-1 max-w-[450px] rotate-[40deg] lg:rotate-0 px-12">
          <img
            src="/illustrations/squiggle.svg"
            alt="squiggle"
            class="w-full pointer-events-none select-none"
          />
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center w-full mt-0 overflow-x-hidden lg:mt-24"
      >
        <h1 class="z-20 text-xl mt-8 lg:mt-16 tracking-wider">Технологии</h1>
        <div class="w-[250vw] sm:w-[200vw] md:w-[120vw] xl:hidden">
          <TechCarousel :perView="3" />
        </div>
        <div class="hidden w-[120vw] xl:block">
          <TechCarousel :perView="5" />
        </div>
      </div>
    </div>

    <img
      src="/backgrounds/backgroundSection1.svg"
      alt="bg"
      class="w-full pointer-events-none select-none translate-y-[-50%]"
    />
  </section>
</template>
