<script setup>
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

  const currentSectionIndex = ref(props.initSectionIndex)

  function decCurrentSectionIndex() {
    currentSectionIndex.value =
      (currentSectionIndex.value + sectionMeta.length - 1) % sectionMeta.length
  }

  function incCurrentSectionIndex() {
    currentSectionIndex.value =
      (currentSectionIndex.value + 1) % sectionMeta.length
  }

  let interval = null
  onMounted(() => {
    if (props.isScroll) {
      interval = setInterval(() => {
        incCurrentSectionIndex()
      }, 5000)
    }
  })

  function handleRight() {
    incCurrentSectionIndex()
    clearInterval(interval)
  }

  function handleLeft() {
    decCurrentSectionIndex()
    clearInterval(interval)
  }
</script>

<template>
  <!-- controls -->
  <div
    class="absolute w-full h-[140vh] hidden items-center justify-between z-30 px-12 md:flex overflow-hidden"
  >
    <img
      src="/icons/Flecha-derecha.svg"
      class="rotate-180 h-12 cursor-pointer hover:animate-pulse"
      @click="handleLeft"
    />
    <img
      src="/icons/Flecha-derecha.svg"
      class="h-12 cursor-pointer hover:animate-pulse"
      @click="handleRight"
    />
  </div>

  <!-- content -->
  <section
    id="multisection"
    class="absolute z-20 flex flex-col lg:flex-row items-center justify-between w-full h-[120vh] px-12 lg:px-48 text-offwhite overflow-hidden"
  >
    <div class="flex flex-col h-[45%] w-[55%] justify-between">
      <div>
        <h2 class="text-2xl lg:text-5xl font-bold">
          {{ sectionMeta[currentSectionIndex].title }}
        </h2>
        <h4 class="mt-10 text-xs lg:text-sm font-thin">
          {{ sectionMeta[currentSectionIndex].description }}
        </h4>
      </div>

      <SectionMultisectionPbar
        :step="currentSectionIndex"
        class="hidden lg:block"
      />
    </div>

    <div class="flex flex-col h-[45%] w-[55%] lg:w-[30%] justify-between">
      <SectionMultisectionIllustrationSelector :step="currentSectionIndex" />

      <SectionMultisectionPbar :step="currentSectionIndex" class="lg:hidden" />
    </div>
  </section>

  <!-- background -->
  <div class="relative z-10 w-full h-full">
    <svg
      class="left-0 mx-0 -m-10 overflow-hidden pointer-events-none select-none"
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
        class="transition duration-700"
      />
      <ellipse
        cx="724"
        cy="728.5"
        rx="1076"
        ry="330.5"
        :fill="sectionMeta[currentSectionIndex].background"
        class="transition duration-700"
      />
      <rect
        y="228"
        width="1451"
        height="728"
        :fill="sectionMeta[currentSectionIndex].background"
        class="transition duration-700"
      />
    </svg>
  </div>
</template>
