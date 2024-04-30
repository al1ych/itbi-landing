<script setup lang="ts">
  const links = [
    {
      label: "Проекты",
      to: "/#projects",
    },
    {
      label: "Специализация",
      to: "/#multisection",
    },
    {
      label: "О компании",
      to: "/#multisection",
    },
    {
      label: "История",
      to: "/#multisection",
    },
    {
      label: "Контакты",
      to: "/#contacts",
    },
  ]
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="h-10 bg-white rounded-full px-4 w-fit border-[1px] border-itbtPurple-700"
    :ui="{
      strategy: 'override',
      active: 'text-itbtPurple-500 bg-transparent -mt-1',
      inactive: 'text-itbtPurple-500 bg-transparent -mt-1',
    }"
  >
    <template #default="{ link }">
      <span class="group-hover:text-primary relative font-light px-1">
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
