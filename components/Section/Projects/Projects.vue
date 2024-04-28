<script setup lang="ts">
  const projectStore = useProjectStore()
  const { projects } = storeToRefs(projectStore)
</script>

<template>
  <section class="bg-[#fcfaff] w-full h-[3000px] -z-20" name="projects">
    <div
      class="flex justify-between w-full flex flex-col justify-center items-center"
    >
      <div class="mx-40 mt-48 text-black flex flex-col items-center">
        <h1 class="text-5xl font-bold z-50">Проекты</h1>

        <div class="w-full flex gap-10 mt-40">
          <SectionProjectsCard
            v-for="p in projects.slice(0, 3)"
            class="w-full section"
            :title="p.title"
            :subtitle="p.subtitle"
            :svg="p.svg"
            :link="p.link"
          />
        </div>

        <AppButton class="mt-10" text="Все проекты" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  /* @keyframes myPulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  .section::hover {
    animation: myPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  } */
</style>
