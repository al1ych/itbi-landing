<script setup lang="ts">
  const items = [
    "https://picsum.photos/600/600?random=1",
    "https://picsum.photos/600/600?random=2",
    "https://picsum.photos/600/600?random=3",
    "https://picsum.photos/600/600?random=4",
    "https://picsum.photos/600/600?random=5",
    "https://picsum.photos/600/600?random=6",
    "https://picsum.photos/600/600?random=6",
    "https://picsum.photos/600/600?random=6",
    "https://picsum.photos/600/600?random=6",
  ]

  const carouselRef = ref()

  onMounted(() => {
    setInterval(() => {
      if (!carouselRef.value) return

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
      }

      carouselRef.value.next()
    }, 5000)
  })
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'snap-center ' }"
    ref="carouselRef"
  >
    <img :src="item" width="400" height="300" />
  </UCarousel>
</template>
