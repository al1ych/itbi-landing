<script setup lang="ts">
  const links = [
    {
      label: "Проекты",
      to: "/projects",
    },
    {
      label: "Специализация",
      to: "/specialization",
    },
    {
      label: "О компании",
      to: "/about",
    },
    {
      label: "История",
      to: "/history",
    },
    {
      label: "Контакты",
      to: "/contacts",
    },
  ]
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="h-10 bg-white rounded-full px-4 w-fit border-[1px] border-itbtPurple-700"
  >
    <template #default="{ link }">
      <span class="group-hover:text-primary relative font-light px-1">
        {{ link.label }}
      </span>
    </template>
  </UHorizontalNavigation>
</template>
