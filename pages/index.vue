import ContactUsButton from '../components/ContactUsButton.vue';
<template>
  <section class="bg-itbtPurple-600 w-full h-[3000px]">
    <div class="flex justify-between w-full">
      <div class="mx-40 mt-48 w-[50%]">
        <h1 class="text-white text-7xl font-bold">
          IT решения на <br />
          1С и Битриксе
        </h1>

        <h2 class="text-[#EEE6FF] text-xl font-thin mt-8">
          Мы специализируемся на разработке и внедрении систем ERP, CRM, ECM, а
          также биллинговых систем для автоматизации ключевых бизнес-процессов
        </h2>

        <ContactUsButton variant="solid" class="mt-10" />
      </div>

      <div class="w-[50%] mr-24">
        <img src="/illustrations/squiggle.svg" alt="squiggle" class="mt-40" />
      </div>
    </div>
  </section>
</template>
