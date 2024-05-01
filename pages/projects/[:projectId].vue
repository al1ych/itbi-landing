<script setup lang="ts">
  const { projectId } = useRoute().params

  const projectStore = useProjectStore()
  const project = projectStore.getProjectById(parseInt(projectId as string))
</script>

<template>
  <section name="header">
    <div class="text-offwhite bg-itbtPurple-700">
      <div class="flex justify-between mx-40">
        <div class="flex flex-col items-center mt-56 ml-4">
          <h1 class="font-bold text-7xl">{{ project.title }}</h1>
        </div>
        <img :src="project.svgDetail" class="mt-12" />
      </div>
    </div>
  </section>

  <section name="content">
    <div class="h-full mx-40 bg-offwhite">
      <div class="grid grid-cols-2 gap-4 p-4 pb-32 mt-10 grid-rows-7">
        <!-- Верхняя левая ячейка "Проект про" -->
        <div
          class="col-span-1 row-span-6 p-6 rounded-lg shadow-sm bg-blockwhite"
        >
          <h3 class="mb-2 text-lg font-semibold">О проекте</h3>
          <p class="text-gray-600">
            Проект был ориентирован на ... под заказчика делали то то тото
            фывафыва Проект был ориентирован на ... под заказчика делали то то
            тото фывафыва Проект был ориентирован на ... под заказчика делали то
            то тото фывафыва Проект был ориентирован на ... под заказчика делали
            то то тото фывафыва Проект был ориентирован на ... под заказчика
            делали то то тото фывафыва Проект был ориентирован на ... под
            заказчика делали то то тото фывафыва Проект был ориентирован на ...
            под заказчика делали то то тото фывафыва Проект был ориентирован на
            ... под заказчика делали то то тото фывафыва Проект был ориентирован
            на ... под заказчика делали то то тото фывафыва Проект был
            ориентирован на ... под заказчика делали то то тото фывафыва Проект
            был ориентирован на ... под заказчика делали то то тото фывафыва
            Проект был ориентирован на ... под заказчика делали то то тото
            фывафыва Проект был ориентирован на ... под заказчика делали то то
            тото фывафыва Проект был ориентирован на ... под заказчика делали то
            то тото фывафыва Проект был ориентирован на ... под заказчика делали
            то то тото фывафыва Проект был ориентирован на ... под заказчика
            делали то то тото фывафыва Проект был ориентирован на ... под
            заказчика делали то то тото фывафыва Проект был ориентирован на ...
            под заказчика делали то то тото фывафыва
          </p>
        </div>

        <!-- Верхняя правая ячейка "Период" -->
        <div
          class="col-span-1 row-span-1 p-6 rounded-lg shadow-sm bg-blockwhite"
        >
          <h3 class="mb-2 text-lg font-semibold">Период</h3>
          <p class="text-gray-600">26.01.2018 - 26.01.2020</p>
        </div>

        <!-- Третья правая ячейка "Техстак" -->
        <div
          class="col-span-1 row-span-5 p-6 rounded-lg shadow-sm bg-blockwhite"
        >
          <h3 class="mb-2 text-lg font-semibold">Техстак</h3>
          <ul class="pl-5 text-gray-600 list-disc">
            <li>jboss</li>
            <li>........</li>
            <li>........</li>
            <li>........</li>
            <li>........</li>
            <li>........</li>
            <li>........</li>
            <li>........</li>
            <li>........</li>
            <li>........</li>
          </ul>
        </div>

        <!-- Нижняя ячейка "Отзыв", занимает всю ширину -->
        <div
          class="col-span-2 row-span-1 p-6 rounded-lg shadow-sm bg-blockwhite"
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
      <div class="bottom-0 flex py-8 mx-48">
        <Footer class="flex-1" />
        <div class="flex-auto"></div>
      </div>
    </div>
  </section>
</template>
