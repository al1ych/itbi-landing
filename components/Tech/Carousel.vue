<template>
  <swiper
    :grabCursor="true"
    :slidesPerView="5"
    :centeredSlides="true"
    :loop="true"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
    :mousewheel="true"
    :autoplay="{
      delay: 5000,
    }"
    :effect="'coverflow'"
    :coverflowEffect="{
      stretch: 100,
      depth: 100,
      modifier: 0.5,
      slideShadows: false,
    }"
  >
    <swiper-slide
      ><TechCard
        title="1C: Бухгалтерия 8"
        subtitle="Запись в реестре №76 от 20.02.2016"
        link="google.com"
    /></swiper-slide>
    <swiper-slide
      ><TechCard
        title="1C: Бухгалтерия 8"
        subtitle="Запись в реестре №76 от 20.02.2016"
        link="google.com"
    /></swiper-slide>
    <swiper-slide
      ><TechCard
        title="1C: Бухгалтерия 8"
        subtitle="Запись в реестре №76 от 20.02.2016"
        link="google.com"
    /></swiper-slide>
    <swiper-slide
      ><TechCard
        title="1C: Бухгалтерия 8"
        subtitle="Запись в реестре №76 от 20.02.2016"
        link="google.com"
    /></swiper-slide>
    <swiper-slide
      ><TechCard
        title="1C: Бухгалтерия 8"
        subtitle="Запись в реестре №76 от 20.02.2016"
        link="google.com"
    /></swiper-slide>
    <swiper-slide
      ><TechCard
        title="1C: Бухгалтерия 8"
        subtitle="Запись в реестре №76 от 20.02.2016"
        link="google.com"
    /></swiper-slide>
    <swiper-slide
      ><TechCard
        title="1C: Бухгалтерия 8"
        subtitle="Запись в реестре №76 от 20.02.2016"
        link="google.com"
    /></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue"

  // Import Swiper styles
  import "swiper/css"

  import "swiper/css/pagination"
  import "swiper/css/navigation"

  // import required modules
  import {
    Pagination,
    Navigation,
    Autoplay,
    Mousewheel,
    EffectCoverflow,
  } from "swiper/modules"

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [
          Pagination,
          Navigation,
          Autoplay,
          Mousewheel,
          EffectCoverflow,
        ],
      }
    },
  }
</script>

<style>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    transition: all 0.3s;
    opacity: 0;

    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide-visible {
    opacity: 1;

    & > .techCard {
      box-shadow: 0px 1rem 100rem rgba(0, 0, 0, 0.25);
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
</style>
