<script setup lang="ts">
  const { projectId } = useRoute().params
</script>

<template>
  <div class="mt-64">
    <h1>Project ID: {{ projectId }}</h1>
  </div>
</template>
