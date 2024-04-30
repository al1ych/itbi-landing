import type { ProjectEntity } from "~/entities/project"

export const useProjectStore = defineStore("project-store", () => {
  // те проекты которые должны отображаться в SectionProjects.vue должны идти первыми в массиве
  const projects = ref<ProjectEntity[]>([
    {
      title: "Телескоп+",
      subtitle:
        "Система автоматизированного мониторинга и управления технологическими процессами и объектами в промышленности",
      svg: "/illustrations/factory-worker.svg",
      link: "/projects/0",
    },
    {
      title: "АИСБД",
      subtitle:
        "Автоматизированная информационная система безбумажного документооборота",
      svg: "/illustrations/notas.svg",
      link: "/projects/1",
    },
    {
      title: "АССОИТН",
      subtitle:
        "Автоматизированная система сбора и обработки информации о технологических нарушениях",
      svg: "/illustrations/report-analysis.svg",
      link: "/projects/2",
    },
    {
      title: "Телескоп+",
      subtitle:
        "Система автоматизированного мониторинга и управления технологическими процессами и объектами в промышленности",
      svg: "/illustrations/factory-worker.svg",
      link: "/projects/0",
    },
    {
      title: "АИСБД",
      subtitle:
        "Автоматизированная информационная система безбумажного документооборота",
      svg: "/illustrations/notas.svg",
      link: "/projects/1",
    },
    {
      title: "АССОИТН",
      subtitle:
        "Автоматизированная система сбора и обработки информации о технологических нарушениях",
      svg: "/illustrations/report-analysis.svg",
      link: "/projects/2",
    },
    {
      title: "АССОИТН",
      subtitle:
        "Автоматизированная система сбора и обработки информации о технологических нарушениях",
      svg: "/illustrations/report-analysis.svg",
      link: "/projects/2",
    },
  ])

  return { projects }
})
