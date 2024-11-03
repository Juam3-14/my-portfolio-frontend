// data.ts
import { CareerExperienceItem, EducationItem, CourseItem, SkillCardProps, Presentation, Project } from './types';

export const careerExperienceData: CareerExperienceItem[] = [
    {
        company: "BircleAI",
        position: "Desarrollador Full Stack",
        period: "Abr 2024 - Oct 2024",
        description: "Desarrollador Full-Stack en BircleAI, startup fintech. Responsable de tareas relacionadas a diseño, desarrollo, configuración y mantenimiento de varias áreas, como son infraestructura (basada en servicios de AWS), arquitectura (orientada a microservicios), servicios Backend (Python - FastAPI), servicios Frontend (Typescript - React.js - Next.js), bases de datos (NoSQL y SQL), e implementación de LLMs para el uso de RAG (Retrieval-Augmented Generation) en varios casos de uso.",
        tools: ["Python", "FastAPI", "React", "Next.js", "TypeScript", "AWS", "MongoDB - DynamoDB", "CI/CD", "Git",],
        responsibilities: [
            "Encargado de diseñar e implementar nuevas funciones, gestionando tanto el desarrollo frontend como el backend y las tareas de DevOps. Mi rol abarca desde la arquitectura y creación de nuevas funcionalidades hasta asegurar un flujo de trabajo ágil y eficiente en cada parte del proceso de desarrollo.",
            "Diseño de estructuras de datos escalables para dar soporte a aplicaciones web, enfocándome en crear arquitecturas de datos eficientes y adaptables, capaces de manejar el crecimiento y la demanda, asegurando el rendimiento de la aplicación.",
            "Optimización y mejora del rendimiento de aplicaciones, considerando factores como velocidad de respuesta, uso eficiente de recursos y experiencia del usuario.",
            "Mentoría de desarrolladores con menor experiencia, haciendo foco en programación orientada a objetos y en las mejores prácticas de codificación, guiando en la implementación de principios sólidos de diseño, promoviendo un código limpio y eficiente, y fomentando el crecimiento técnico para mejorar la calidad del equipo de desarrollo y del producto desarrollado.",
            "Colaboración directa con el CTO, aportando ideas clave sobre el proceso de desarrollo y contribuyendo a la toma de decisiones técnicas. Esto incluye realizar constante análisis del progreso del proyecto, sugiriendo mejoras estratégicas y alineando las decisiones técnicas con los objetivos de negocio que me eran informados."
        ],
    },
    {
        company: "CIDS (Center of Investigation and Development of Software) - UTN FRC",
        position: "Desarrollador PL-SQL / Administrador de Base de Datos / Ingeniero de Datos",
        period: "May 2017 - Mar 2024",
        description: "Me uní a CIDS como pasante a través de un 'Programa de Inducción para Estudiantes de Primer Año en Desarrollo de Software'. Durante mi primer año como estudiante universitario, mientras aprendía los fundamentos de los Sistemas de Información y la Informática, participé en el análisis de requisitos, el diseño de soluciones y la documentación de proyectos que se encontraban en sus fases iniciales (2017-2018). Más tarde, a medida que fui aumentando mis conocimientos, contribuí como tester de calidad de software, realizando pruebas manuales, documentación de proyectos, diseño y ejecución de casos de prueba, y validación de datos (2018-2020). Al avanzar más aún en mis estudios, pasé al equipo de gestión de datos de CIDS, trabajando como administrador de base de datos (DBA) y desarrollador PL/SQL en varios proyectos. Finalmente, di mis primeros pasos en el desarrollo backend: manteniendo y desarrollando (principalmente) bases de datos relacionales, y creando los endpoints del framework .NET que utilizaban los procedimientos almacenados que había escrito (2020-2024).",
        tools: ["Postman", "Oracle PL/SQL", "MySQL", "PostgreSQL", ".NET Framework", "Microsoft PowerBI", "Python", "Git", "Scrum", "Agile"],
        responsibilities: [
            "Mantenimiento y desarrollo de bases de datos relacionales en entornos productivos y pre-productivos, asegurando su rendimiento y disponibilidad, realizando ajustes de rendimiento, optimizando consultas y estructurando los datos para mejorar la eficiencia y confiabilidad en la gestión de la información.",
            "Desarrollo y mantenimiento de procedimientos almacenados, garantizando la eficiencia y efectividad en la gestión de datos. A lo que se suma la optimización de consultas asegurando la integridad de los datos y facilitando las integraciones entre consumidores y orígenes de datos. Además, también realizando implementaciones de los procedimientos almacenados desarrollados en APIs RESTful, con .NET frameworl y C#.",
            "Diseño y gestión de flujos de trabajo ETL (Extracción, Transformación y Carga) para cargar datos en almacenes de datos, asegurando la integridad y disponibilidad de la información. Esto implica la extracción de datos de diversas fuentes, transformándolos para cumplir con los requisitos del sistema y cargándolos eficientemente en el almacén para facilitar el análisis y la toma de decisiones.",
            "Diseño, mantenimiento y desarrollo de tableros de Business Intelligence, proporcionando visualizaciones claras y efectivas de datos para facilitar la toma de decisiones.",
            "Diseño y ejecución de planes de prueba y casos de prueba, asegurando la calidad y funcionalidad del software.",
            "Documentación de proyectos y productos, creando manuales de usuario, especificaciones técnicas y documentación de procesos.",
            "Colaboración con equipos multidisciplinarios tanto del lado del desarrollo como del cliente, fomentando una comunicación efectiva y un enfoque integrado en los proyectos."
        ],
    },
];

export const educationData: EducationItem[] = [
    {
        degree: "Ingeniero en Sistemas de Información",
        institution: "Universidad Tecnológica Nacional - Argentina UTN FRC",
        year: "Feb 2017 - Feb 2024",
    },
];

export const coursesData: CourseItem[] = [
    {
        name: "Kubernetes for the Absolute Beginners - Hands on",
        provider: "Udemy - KodeKloud Training",
        completionDate: "Sep 2024",
    },
    {
        name: "Oracle Data Integrator (ODI) 12c Developer Course",
        provider: "Udemy - Sanjay Singh",
        completionDate: "Feb 2024",
    },
    {
        name: "PowerBI: Toma de decisiones basadas en datos",
        provider: "Kinetic",
        completionDate: "Jul 2022",
    },
    {
        name: "Certificado de Idioma Inglés: Nivel B2",
        provider: "Trinity College London",
        completionDate: "Ago 2016",
    },
];

export const knownTools: SkillCardProps[] = [
    { name: "Python", level: 70, description: "He trabajado en varios proyectos de análisis de datos y desarrollo web." },
    { name: "PL/SQL", level: 75, description: "Desarrollo de bases de datos y scripts para la automatización de procesos." },
    { name: "Typescript", level: 55, description: "Uso de TypeScript en proyectos de frontend para mejorar la calidad del código." },
    { name: "Javascript", level: 55, description: "Desarrollo de aplicaciones web interactivas utilizando JavaScript." },
    { name: "FastAPI", level: 60, description: "Construcción de APIs rápidas y eficientes con FastAPI." },
    { name: "React.js", level: 75, description: "Desarrollo de interfaces de usuario con React, enfocándome en la reutilización de componentes." },
    { name: "Docker", level: 60, description: "Uso de Docker para la contenerización de aplicaciones y servicios." },
    { name: "Git", level: 70, description: "Gestión de versiones de proyectos utilizando Git.Gestión de versiones de proyectos utilizando Git.Gestión de versiones de proyectos utilizando Git.Gestión de versiones de proyectos utilizando Git.Gestión de versiones de proyectos utilizando Git.Gestión de versiones de proyectos utilizando Git.Gestión de versiones de proyectos utilizando Git.Gestión de versiones de proyectos utilizando Git." },
    { name: "Agile/Scrum", level: 70, description: "Me manejo cómodamente trabajando de manera ágil y ordenada. He participado de varios equipos que implementaban la metodología Scrum en su día a día para planificar y ejecutar las tareas." },
]

export const knownSkills: SkillCardProps[] = [
    { name: "Resolución de pProblemas", level: 85, description: "Soy un tipazo." },
    { name: "Trabajo en equipo", level: 95, description: "Soy un tipazo." },
    { name: "Aprendizaje rápido", level: 80, description: "Soy un tipazo." },
    { name: "Diseño de soluciones", level: 85, description: "Soy un tipazo." },
    { name: "Pensamiento crítico", level: 95, description: "Soy un tipazo." },
    { name: "Pensamiento alternativo 'Out of the Box'", level: 85, description: "Soy un tipazo." },
    { name: "Trabajo duro", level: 90, description: "Soy un tipazo." },
    { name: "Creatividad y Optimismo", level: 100, description: "Soy un tipazo." },
    { name: "Respeto y Cordialidad", level: 90, description: "Soy un tipazo." },
    { name: "Perseverancia", level: 95, description: "Soy un tipazo." },
    { name: "Integridad", level: 90, description: "Soy un tipazo." },
    { name: "Autogestión y Responsabilidad", level: 90, description: "Soy un tipazo." },
]

export const presentation: Presentation[] = [
    {
        title: "Bienvenido a mi (aún en desarrollo) Portfolio Personal!",
        text: "¡Hola! Soy un apasionado Ingeniero en Sistemas de Información, que tiene el objetivo de convertirse en Desarrollador Full Stack. Con una sólida base en tecnologías de gestión de datos, así como de front-end y de back-end, estoy en constante aprendizaje y mejora de mis habilidades para crear aplicaciones web robustas y fáciles de usar. Esta página está en progreso, pero no dudes en contactarme para darme tu opinión o para hablar de cualquier otro tema que consideres relevante :D",
    }
]

export const project: Project[] = [
    {
        name: "",
        description: "",
        objective: "",
        stackAndTools: "",
        image: "",
    }
]