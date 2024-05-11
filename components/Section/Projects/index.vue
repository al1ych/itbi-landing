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
    <section id="projects" class="w-full z-10 relative -mt-6" name="projects">
      <div class="w-full flex flex-col justify-center items-center">
        <div
          class="pb-24 flex flex-col items-center sm:px-12 md:px-24 lg:px-36"
        >
          <h1 v-if="showAll" class="text-7xl font-bold lg:self-start z-50">
            Проекты
          </h1>
          <h1
            v-else
            class="text-5xl font-medium md:font-bold z-50 text-[#242424]"
          >
            Проекты
          </h1>

          <div
            class="w-full px-6 sm:px-0 flex flex-col sm:flex-row flex-wrap justify-center gap-y-16 gap-x-4 mt-20 sm:mt-32 md:mt-24 lg:mt-24 lg:px-24"
          >
            <SectionProjectsCard
              v-for="p in projectsToShow"
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
