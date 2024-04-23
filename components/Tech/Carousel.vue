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
      rotate: 0,
      stretch: 5,
      depth: 1000,
      modifier: 0.2,
      slideShadows: true,
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

    animation: staggerIn 0.3s forwards 0s ease-out;
  }

  @keyframes staggerIn {
    from {
      opacity: 0;
      transform: translate(0, 1rem);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .swiper-slide {
    transition: opacity 0.3s;
    opacity: 0;

    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide-visible {
    opacity: 1;

    /* &:first-child > .techCard {
      box-shadow: 0px 1rem 10rem rgba(220, 201, 255, 1);
    } */
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
