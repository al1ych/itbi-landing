<script setup lang="ts">
  const { projectId } = useRoute().params

  const projectStore = useProjectStore()
  const project = projectStore.getProjectById(parseInt(projectId as string))
</script>

<template>
  <section name="header">
    <div class="text-offwhite bg-itbtPurple-700">
      <div
        class="flex justify-center lg:justify-between items-center mx-6 lg:mx-40"
      >
        <div
          class="flex flex-col items-center justify-center lg:ml-4 w-full h-64"
        >
          <h1 class="font-bold text-4xl md:text-7xl">{{ project.title }}</h1>
        </div>
        <img :src="project.svgDetail" class="mt-12 hidden md:block" />
      </div>
    </div>
  </section>

  <section name="content text-gray-800">
    <div class="h-full mx-6 md:mx-30 lg:mx-40 bg-offwhite">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pb-32 mt-10 md:grid-rows-5"
      >
        <!-- Верхняя левая ячейка "Проект про" -->
        <div
          class="md:col-span-1 md:row-span-6 p-6 rounded-lg shadow-sm bg-blockwhite"
        >
          <h3 class="mb-2 text-lg font-semibold">О проекте</h3>
          <p v-for="desc in project.description" class="text-gray-600 pb-2">
            {{ desc }}
          </p>
        </div>

        <!-- Верхняя правая ячейка "Период" -->
        <div
          class="md:col-span-1 md:row-span-1 p-6 rounded-lg shadow-sm bg-blockwhite"
        >
          <h3 class="mb-2 text-lg font-semibold">Период</h3>
          <p class="text-gray-600">{{ project.dates?.join(" – ") }}</p>
        </div>

        <!-- Третья правая ячейка "Техстак" -->
        <div
          class="md:col-span-1 md:row-span-5 p-6 rounded-lg shadow-sm bg-blockwhite"
        >
          <h3 class="mb-2 text-lg font-semibold">Техстек</h3>
          <ul class="pl-5 text-gray-600 list-disc">
            <li v-for="tech in project.techStack">{{ tech }}</li>
          </ul>
        </div>

        <!-- Нижняя ячейка "Отзыв", занимает всю ширину -->
        <div
          v-if="false"
          class="md:col-span-2 md:row-span-1 p-6 rounded-lg shadow-sm bg-blockwhite"
        >
          <div class="flex justify-between">
            <h3 class="mb-2 text-lg font-semibold">Отзыв</h3>
            <p>★★★★☆</p>
          </div>
          <p class="text-gray-600">Текст отзыва здесь...</p>
        </div>
      </div>
    </div>
  </section>

  <section name="footer">
    <div class="text-offwhite bg-[#03000A] w-full">
      <div class="bottom-0 flex py-8 mx-10 lg:mx-48">
        <Footer class="flex-1" :forceTextWhite="true" />
        <!-- <div class="flex-auto"></div> -->
      </div>
    </div>
  </section>
</template>
