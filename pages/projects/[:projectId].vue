<script setup>
  const { projectId } = useRoute().params

  // get project data from project store
  const projectStore = useProjectStore()
  const project = projectStore.getProjectById(projectId)
</script>

<template>
  <div class="text-offwhite mx-32">
    <div class="mt-16">
      <h1 class="font-bold text-6xl py-32">{{ project.title }}</h1>
    </div>
  </div>
</template>
