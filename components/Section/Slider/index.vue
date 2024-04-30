<script setup lang="ts">
  const props = defineProps(["initSectionIndex", "isScroll"])

  const sectionMeta = [
    {
      title: "Специализация",
      description:
        'Мы специализируемся на разработке и внедрении систем ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), ECM (Enterprise Content Management), а также биллинговых систем для автоматизации ключевых бизнес-процессов. Наш опыт включает успешное выполнение проектов на базе платформы "1С:Предприятие", "Битрикс" и других ведущих решений в этой области. Каждому клиенту мы гарантируем индивидуальный подход и предложение оптимальных решений, направленных на повышение эффективности их бизнеса.',
      background: "#00234B",
    },
    {
      title: "О компании",
      description:
        "АйтиБиАй (IT Business Idea) — молодая и активная компания с амбициозными целями, специализирующаяся на разработке и внедрении ИТ-решений для автоматизации деятельности компаний в различных секторах экономики, а также предоставлении консалтинговых услуг. Наша команда готова к реализации проектов любой сложности — от решения небольших задач до выполнения крупных комплексных ИТ-проектов.",
      background: "#5A05FF",
    },
    {
      title: "История",
      description:
        "Основанная в 2013 году в Москве, компания IT Business Idea собрала вокруг себя команду высококвалифицированных специалистов с многолетним опытом работы в области информационных технологий. Наши эксперты обладают необходимыми знаниями и навыками, специализируясь на 1C. Это позволяет нам эффективно внедрять, сопровождать и развивать системы, направленные на повышение уровня автоматизации на предприятиях.",
      background: "#00234B",
    },
  ]

  const currentSectionIndex = ref<number>(props.initSectionIndex)

  onMounted(() => {
    if (props.isScroll) {
      setInterval(() => {
        console.log("Hello world", currentSectionIndex.value)
        currentSectionIndex.value = (currentSectionIndex.value + 1) % 3
      }, 3000)
    }
  })
</script>

<template>
  <section
    class="absolute z-20 flex items-center justify-between w-full h-full px-48 text-offwhite"
  >
    <div class="flex flex-col w-1/2 h-[40%] justify-between">
      <div>
        <h2 class="text-5xl font-bold">
          {{ sectionMeta[currentSectionIndex].title }}
        </h2>
        <h4 class="mt-10 text-sm font-thin">
          {{ sectionMeta[currentSectionIndex].description }}
        </h4>
      </div>

      <SectionSliderPbar :step="currentSectionIndex" />
    </div>

    <div>
      <SectionSliderIllustrationSelector :step="currentSectionIndex" />
    </div>
  </section>

  <div class="relative z-10 w-full h-full">
    <svg
      class="left-0 mx-0 -m-10 pointer-events-none select-none"
      viewBox="0 0 1440 1059"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="802.854"
        cy="374.114"
        rx="906.203"
        ry="291.5"
        transform="rotate(5.25071 802.854 374.114)"
        :fill="sectionMeta[currentSectionIndex].background"
        class="transition"
      />
      <ellipse
        cx="724"
        cy="728.5"
        rx="1076"
        ry="330.5"
        :fill="sectionMeta[currentSectionIndex].background"
        class="transition"
      />
      <rect
        y="228"
        width="1451"
        height="728"
        :fill="sectionMeta[currentSectionIndex].background"
        class="transition"
      />
    </svg>
  </div>
</template>
