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

  const dynamicBackground = computed(() => {
    const color = sectionMeta[currentSectionIndex.value].background
    return color
  })

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
  <div class="relative">
    <div class="h-[120vh] bg-transparent relative flex flex-col justify-center">
      <!-- top ellipse -->
      <div class="absolute top-0 w-full">
        <svg
          viewBox="0 0 1440 605"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="802.854"
            cy="302.114"
            rx="906.203"
            ry="291.5"
            transform="rotate(5.25071 802.854 302.114)"
            :fill="dynamicBackground"
            class="transition duration-700"
          />
        </svg>
      </div>

      <!-- bottom ellipse -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 661"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="724"
            cy="330.5"
            rx="1076"
            ry="330.5"
            :fill="dynamicBackground"
            class="transition duration-700"
          />
        </svg>
      </div>

      <!-- controls -->
      <div
        class="absolute w-full h-full hidden items-center justify-between z-30 px-12 md:flex"
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
        class="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full px-6 md:px-48 lg:px-48 text-offwhite transition duration-700 md:gap-16 gap-16 h-[80%] md-[60%] lg:h-[65%]"
        :style="{
          'background-color': dynamicBackground,
        }"
      >
        <div
          class="flex flex-col lg:w-[55%] justify-between gap-y-16 flex-auto lg:flex-initial"
        >
          <div class="flex-grow mt-24">
            <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold">
              {{ sectionMeta[currentSectionIndex].title }}
            </h2>
            <h4
              class="mt-10 text-sm md:text-lg lg:text-sm text-gray-100 leading-relaxed font-extralight pr-12"
            >
              {{ sectionMeta[currentSectionIndex].description }}
            </h4>
          </div>

          <SectionMultisectionPbar
            :step="currentSectionIndex"
            class="hidden lg:block flex-1"
          />
        </div>

        <div
          class="flex-grow flex flex-col lg:h-[45%] lg:w-[30%] justify-center items-center gap-y-20 md:gap-y-20 lg:mt-16"
        >
          <SectionMultisectionIllustrationSelector
            :step="currentSectionIndex"
            class="px-20 lg:px-0"
          />

          <SectionMultisectionPbar
            :step="currentSectionIndex"
            class="lg:hidden translate-x-4 pb-24"
          />
        </div>
      </section>
    </div>
  </div>
</template>
