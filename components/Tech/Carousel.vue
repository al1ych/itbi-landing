<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
    :mousewheel="true"
    :autoplay="{
      delay: 5000,
    }"
  >
    <swiper-slide><TechCard /></swiper-slide>
    <swiper-slide><TechCard /></swiper-slide>
    <swiper-slide><TechCard /></swiper-slide>
    <swiper-slide><TechCard /></swiper-slide>
    <swiper-slide><TechCard /></swiper-slide>
    <swiper-slide><TechCard /></swiper-slide>
    <swiper-slide><TechCard /></swiper-slide>
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
  import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules"

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Autoplay, Mousewheel],
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
    text-align: center;
    font-size: 18px;
    background: #3f3f3f;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
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
