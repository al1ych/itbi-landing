<script setup lang="ts">
  const links = [
    {
      label: "Проекты",
      to: "/#projects",
    },
    {
      label: "Специализация",
      to: "/#multisection",
      multisectionIndex: 0,
    },
    {
      label: "О компании",
      to: "/#multisection",
      multisectionIndex: 1,
    },
    {
      label: "История",
      to: "/#multisection",
      multisectionIndex: 2,
    },
    {
      label: "Контакты",
      to: "/#contacts",
    },
  ]

  defineProps(["isVertical"])

  const multisectionStore = useMultisectionStore()
  const { currentSectionIndex } = storeToRefs(multisectionStore)
  function handleMultisection(multisectionIndex: number) {
    currentSectionIndex.value = multisectionIndex
  }
</script>

<template>
  <UVerticalNavigation
    v-if="isVertical"
    :links="links"
    class="w-full"
    :ui="{
      strategy: 'override',
      active: 'text-white bg-transparent -mt-1',
      inactive: 'text-white bg-transparent -mt-1',
      size: 'text-md',
      padding: 'px-0 py-5',
    }"
  >
    <template #default="{ link }">
      <span
        class="group-hover:text-primary relative font-light px-1 inline-flex justify-between w-full"
        @click="() => handleMultisection(link.multisectionIndex)"
      >
        <p>{{ link.label }}</p>
        <img src="/icons/Flecha-derecha.svg" />
      </span>
    </template>
  </UVerticalNavigation>

  <UHorizontalNavigation
    v-else
    :links="links"
    class="h-10 bg-white rounded-full px-4 w-fit border-[1px] border-itbtPurple-700"
    :ui="{
      strategy: 'override',
      active: 'text-itbtPurple-500 bg-transparent -mt-1',
      inactive: 'text-itbtPurple-500 bg-transparent -mt-1',
    }"
  >
    <template #default="{ link }">
      <span
        class="group-hover:text-primary relative font-light px-1"
        @click="() => handleMultisection(link.multisectionIndex)"
      >
        {{ link.label }}
      </span>
    </template>
  </UHorizontalNavigation>
</template>

<style>
  :root {
    scroll-behavior: smooth;
  }
</style>
