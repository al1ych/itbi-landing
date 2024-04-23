import ContactUsButton from '../components/ContactUsButton.vue';
<template>
  <body class="text-white font-thin bg-itbtPurple-700">
    <section class="w-full relative bg-[#fcfaff]" name="main">
      <div class="flex justify-between w-full relative z-20">
        <div class="mx-52 mt-48 w-[50%]">
          <h1 class="text-white text-6xl font-bold">
            IT решения на <br />
            1С и Битриксе
          </h1>

          <h2 class="text-[#EEE6FF] text-xl font-thin mt-8">
            Мы специализируемся на разработке и внедрении систем ERP, CRM, ECM,
            а также биллинговых систем для автоматизации ключевых
            бизнес-процессов
          </h2>

          <ContactUsButton variant="solid" class="mt-10" />
        </div>

        <div class="w-[40%] mr-48 mt-8">
          <img
            src="/illustrations/squiggle.svg"
            alt="squiggle"
            class="mt-40 pointer-events-none select-none"
          />
        </div>
      </div>

      <div class="w-full flex flex-col justify-center items-center mt-24">
        <h1 class="text-xl z-20">Технологии</h1>
        <TechCarousel class="mt-8 mb-64" />
      </div>

      <img
        src="/backgrounds/backgroundSection1.svg"
        alt="bg"
        class="w-full absolute pointer-events-none select-none top-0 left-0 z-0"
      />
    </section>

    <section class="bg-[#fcfaff] w-full h-[3000px] -z-20" name="projects">
      <div class="flex justify-between w-full">
        <div class="mx-40 mt-48 w-[50%]">
          <h1 class="text-white text-7xl font-bold">
            IT решения на <br />
            1С и Битриксе
          </h1>

          <h2 class="text-[#EEE6FF] text-xl font-thin mt-8">
            Мы специализируемся на разработке и внедрении систем ERP, CRM, ECM,
            а также биллинговых систем для автоматизации ключевых
            бизнес-процессов
          </h2>

          <ContactUsButton variant="solid" class="mt-10" />
        </div>

        <div class="w-[50%] mr-24">
          <img src="/illustrations/squiggle.svg" alt="squiggle" class="mt-40" />
        </div>
      </div>
    </section>
  </body>
</template>
