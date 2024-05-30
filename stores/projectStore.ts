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
      description: [
        "Система Телескоп+ предназначена для автоматизированного мониторинга и управления технологическими процессами и объектами в газово-нефтяной промышленности, теплоэнергетике и электроэнергетике. Телескоп+ обеспечивает единое информационное пространство в распределенных АСУ, поддерживая разделение прав доступа к информации, средствам управления, инструментам и средствам конфигурации системы.",
      ],
      techStack: [
        "АРМ Энергетика",
        "ПО Smart IMS:",
        "RootRouterPlus",
        "NMS",
        "SIMS ",
        "MS SQL Server 2005, 2008, 2012",
      ],
      dates: ["23.11.2017", "27.11.2020"],
    },
    {
      title: "АС «Крона»",
      subtitle:
        "Система ведения топологии сети организации и смежных энергообъектов",
      svg: "/illustrations/projects/notas.svg",
      svgDetail: "/illustrations/projects/notas.svg",
      link: "/projects/1",
      description: [
        "АС «Крона» предназначена для ведения топологии сети организации и смежных энергообъектов иных собственников, ведение реестра энергообъектов, построения топологии распределительной сети как на уровне энергообъектов, так и оборудования.",
      ],
      dates: ["26.01.2018", "16.04.2024"],
      techStack: [
        "JBoss Seam v.2.3.1 Final",
        "Vaadin Framework",
        "BPMS   Jboss jBPM",
        "JBoss Application Server",
        "Firebird 2.5. SQL Server",
        "Apache Solr",
        "RichFaces Framework v.3.3.3",
        "Набор библиотек, разрабатываемых Apache Software Foundation (ASF)",
        "java-cas-client библиотека",
        "RabbitMQ 3.3.5",
        "WSO2 Enterprise Integrator 6.5.0, 6.6.0",
      ],
    },
    {
      title: "АССОИТН",
      subtitle:
        "Автоматизированная система сбора и обработки информации о технологических нарушениях",
      svg: "/illustrations/projects/report-analysis.svg",
      svgDetail: "/illustrations/projects/report-analysis.svg",
      link: "/projects/2",
      description: [
        "«Диспетчерский журнал» предназначен для:",
        "• Ведения информации о технологических нарушениях в сети",
        "• Определения отключенных энергообъектов и потребителей в разрезе статистических данных",
        "• Предоставления информации о состоянии объектов электрической сети заинтересованным подразделениям и организациям;",
        "• Ведения информации о плановых и неплановых отключениях в сети в организации.",
        "Сервисная шина WSO2ESB",
        "Сервисная шина обеспечивает обмен сообщениями между различными ИС на принципах сервис-ориентированной архитектуры. Основной принцип сервисной шины - концентрация обмена сообщениями между различными системами через единую точку, в которой, при необходимости, обеспечивается транзакционный контроль, преобразование данных, сохранность сообщений.",
      ],
      dates: ["26.01.2018", "16.04.2024"],
      techStack: [
        "JBoss Seam v.2.3.1 Final",
        "Vaadin Framework",
        "BPMS   Jboss jBPM",
        "JBoss Application Server",
        "Firebird 2.5. SQL Server",
        "Apache Solr",
        "RichFaces Framework v.3.3.3",
        "Набор библиотек, разрабатываемых Apache Software Foundation (ASF)",
        "java-cas-client библиотека",
        "RabbitMQ 3.3.5",
        "WSO2 Enterprise Integrator 6.5.0, 6.6.0",
      ],
    },
    {
      title: "АИСБД",
      subtitle:
        "Автоматизированная информационная система безбумажного документооборота",
      svg: "/illustrations/projects/dart.svg",
      svgDetail: "/illustrations/projects/dart.svg",
      link: "/projects/2",
      description: [
        'Автоматизированная информационная система безбумажного документооборота - это заказная разработка для нужд ПАО "МРСК УРАЛА" на основе продукта COMSOFT DOCS. Предназначена для комплексной автоматизации бизнес-процессов документационного обеспечения, включая филиалы и подразделения компании.',
      ],
      dates: ["25.02.2018", "18.03.2024"],
      techStack: [
        "Платформа OpenIcar –технологическая основа для реализации современных процессно-ориентированных прикладных решений.",
        "BPMN 2.0",
      ],
    },
  ])

  // get by id
  const getProjectById = (id: number) => {
    return projects.value[id]
  }

  return { projects, getProjectById }
})
