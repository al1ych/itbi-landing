import type { ProjectEntity } from "~/entities/project"

export const useProjectStore = defineStore("project-store", () => {
  // те проекты которые должны отображаться в SectionProjects.vue должны идти первыми в массиве
  const projects = ref<ProjectEntity[]>([
    {
      title: "Телескоп+",
      subtitle:
        "Система автоматизированного мониторинга и управления технологическими процессами и объектами в промышленности",
      svg: "/illustrations/projects/factory-worker.svg",
      svgDetail: "/illustrations/projects/factory-worker-detail.svg",
      link: "/projects/0",
    },
    {
      title: "АИСБД",
      subtitle:
        "Автоматизированная информационная система безбумажного документооборота",
      svg: "/illustrations/projects/notas.svg",
      svgDetail: "/illustrations/projects/factory-worker-detail.svg",
      link: "/projects/1",
    },
    {
      title: "АССОИТН",
      subtitle:
        "Автоматизированная система сбора и обработки информации о технологических нарушениях",
      svg: "/illustrations/projects/report-analysis.svg",
      svgDetail: "/illustrations/projects/factory-worker-detail.svg",
      link: "/projects/2",
    },
    {
      title: "Телескоп+",
      subtitle:
        "Система автоматизированного мониторинга и управления технологическими процессами и объектами в промышленности",
      svg: "/illustrations/projects/factory-worker.svg",
      svgDetail: "/illustrations/projects/factory-worker-detail.svg",
      link: "/projects/0",
    },
    {
      title: "АИСБД",
      subtitle:
        "Автоматизированная информационная система безбумажного документооборота",
      svg: "/illustrations/projects/notas.svg",
      svgDetail: "/illustrations/projects/factory-worker-detail.svg",
      link: "/projects/1",
    },
    {
      title: "АССОИТН",
      subtitle:
        "Автоматизированная система сбора и обработки информации о технологических нарушениях",
      svg: "/illustrations/projects/report-analysis.svg",
      svgDetail: "/illustrations/projects/factory-worker-detail.svg",
      link: "/projects/2",
    },
    {
      title: "АССОИТН",
      subtitle:
        "Автоматизированная система сбора и обработки информации о технологических нарушениях",
      svg: "/illustrations/projects/report-analysis.svg",
      svgDetail: "/illustrations/projects/factory-worker-detail.svg",
      link: "/projects/2",
    },
  ])

  // get by id
  const getProjectById = (id: number) => {
    return projects.value[id]
  }

  return { projects, getProjectById }
})
