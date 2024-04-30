<script setup lang="ts">
  const projectStore = useProjectStore()
  const { projects } = storeToRefs(projectStore)

  const props = defineProps(["showAll"])

  const projectsToShow = computed(() => {
    if (props.showAll) return projects.value
    return projects.value.slice(0, 3)
  })
</script>

<template>
  <div class="bg-offwhite">
    <section id="projects" class="relative w-full z-10" name="projects">
      <div class="w-full flex flex-col justify-center items-center">
        <div class="mx-40 mt-48 pb-24 flex flex-col items-center">
          <h1 class="text-5xl font-bold z-50">Проекты</h1>

          <div class="w-full flex flex-wrap justify-around gap-y-20 mt-40">
            <SectionProjectsCard
              v-for="p in projectsToShow"
              class="section w-1/3 px-10"
              :title="p.title"
              :subtitle="p.subtitle"
              :svg="p.svg"
              :link="p.link"
            />
          </div>

          <AppButton
            v-if="!showAll"
            class="mt-10"
            text="Все проекты"
            to="/projects"
          />
        </div>
      </div>
    </section>
  </div>
</template>
