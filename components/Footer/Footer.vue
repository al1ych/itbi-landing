<script setup lang="ts">
  const email = "back-office@it-b-i.ru"
  const emailTo = `mailto:${email}`

  const telFormatted = "+7 (916) 175-31-47"
  const tel = "+79161753147"
  const telTo = `tel:${tel}`

  const waTo = `https://wa.me/${tel}`
  const tgTo = `https://t.me/${tel}`

  defineProps(["forceTextWhite"])
</script>

<template>
  <footer
    class="flex lg:items-center lg:justify-between w-full h-full flex-col lg:flex-row text-white lg:text-black justify-center items-start gap-y-6"
    :class="{
      'lg:text-white': forceTextWhite,
    }"
  >
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="flex flex-col gap-2">
        <p class="font-normal">E-mail</p>
        <a
          :href="emailTo"
          class="text-sm lg:text-gray-500 hover:text-primary"
          :class="{
            'lg:text-white': forceTextWhite,
          }"
        >
          {{ email }}
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-normal">Телефон</p>
        <a
          :href="telTo"
          class="text-sm lg:text-gray-500 hover:text-primary"
          :class="{
            'lg:text-white': forceTextWhite,
          }"
        >
          {{ telFormatted }}
        </a>
      </div>
    </div>

    <div class="flex gap-4">
      <NuxtLink :to="waTo">
        <img
          src="/icons/socials/whatsapp.svg"
          class="hover:opacity-50 transition"
        />
      </NuxtLink>
      <NuxtLink :to="tgTo">
        <img src="/icons/socials/tg.svg" class="hover:opacity-50 transition" />
      </NuxtLink>
    </div>
  </footer>
</template>
