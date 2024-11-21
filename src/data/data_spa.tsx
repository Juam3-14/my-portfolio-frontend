// data.ts
import { CareerExperienceItem, EducationItem, CourseItem, SkillCardProps, Presentation, ProjectItem } from './types';

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
        company: "CIDS (Centro de Investigación y Desarrollo de Software) - UTN FRC",
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
    { name: "Python (Principal)", level: 70, description: "He trabajado en varios proyectos de análisis de datos y desarrollo web, utilizando Python como mi lenguaje de programación principal para trabajos académicos y proyectos personales. Esta experiencia me permitió profundizar en las capacidades de Python y aplicarlo de manera efectiva en escenarios del mundo real." },
    { name: "PL/SQL (Principal)", level: 75, description: "Tengo experiencia en el desarrollo de bases de datos y la escritura de scripts en PL/SQL para la automatización de procesos. Este trabajo me ha permitido optimizar operaciones y mejorar la eficiencia al automatizar tareas repetitivas, lo que facilita una mejor gestión y análisis de datos." },
    { name: "Typescript (Muy usado)", level: 55, description: "Uso TypeScript en mis proyectos de frontend para mejorar la calidad del código. Al aprovechar su tipado fuerte y las funciones de verificación de errores, puedo detectar problemas potenciales desde el inicio del proceso de desarrollo, lo que resulta en aplicaciones más robustas y mantenibles." },
    { name: "Javascript (Usado)", level: 55, description: "Desarrollo nuevas funcionalidades en aplicaciones web utilizando JavaScript, particularmente con Node.js. Esta experiencia me permite crear aplicaciones dinámicas del lado del servidor y mejorar las interacciones con los usuarios, haciendo que la experiencia general sea más atractiva y receptiva." },
    { name: "FastAPI (Muy usado)", level: 60, description: "Construyo APIs rápidas y eficientes con FastAPI. Este framework me permite crear endpoints robustos rápidamente, aprovechando sus capacidades asincrónicas y la validación automática de datos para mejorar el rendimiento y garantizar la fiabilidad en mis aplicaciones." },
    { name: "React.js (Muy usado)", level: 75, description: "Desarrollo interfaces de usuario con React, enfocándome en la reutilización de componentes. Este enfoque me permite crear un código modular y mantenible, mejorando la eficiencia general de mis proyectos mientras ofrezco una experiencia de usuario consistente en las diferentes partes de la aplicación." },
    { name: "Docker (Usado)", level: 60, description: "Uso Docker para la contenerización de aplicaciones y servicios. Esta tecnología me permite crear entornos aislados, garantizando consistencia en las etapas de desarrollo, pruebas y producción, lo que simplifica el despliegue y mejora la escalabilidad." },
    { name: "Git (Principal)", level: 70, description: "Gestiono las versiones de los proyectos utilizando Git. Este sistema de control de versiones me permite rastrear cambios, colaborar con miembros del equipo y mantener un historial de modificaciones, asegurando un flujo de trabajo estructurado y eficiente durante el proceso de desarrollo." },
    { name: "Agile/Scrum (Principal)", level: 70, description: "Me manejo cómodamente trabajando de manera ágil y ordenada. He participado en varios equipos que implementaban la metodología Scrum en su día a día para planificar y ejecutar las tareas de manera efectiva." },
]

export const knownSkills: SkillCardProps[] = [
    { name: "Resolución de Problemas", level: 85, description: "Disfruto de resolver problemas complejos planteando soluciones sencillas. Con un razonamiento metódico y prolijo logro llegar a conclusiones que integran todos los conocimientos que poseo para obtener la mejor solución posible a un problema." },
    { name: "Trabajo en equipo", level: 95, description: "Las actividades en equipo, como deportes, proyectos, trabajo y otras actividades lúdicas, me transformaron en una persona intrínsecamente colaborativa, que sabe que lograr una cooperación sinérgica es clave para potenciar las habilidades de cada miembro del equipo." },
    { name: "Aprendizaje rápido", level: 80, description: "El simple hecho de aprender es algo que me genera mucha satisfacción, lo que facilita mi proceso de estudio, implementación y aprendizaje de nuevos conocimientos, herramientas y tecnologías." },
    { name: "Diseño de soluciones", level: 85, description: "Diseñar soluciones de manera que sean fácilmente entendibles es algo que disfruto. Con esquemas y diagramas prolijos e informativos, logro describir tanto los problemas como sus soluciones." },
    { name: "Pensamiento crítico", level: 95, description: "Busco llegar a las conclusiones que guían mis acciones de manera crítica y metódica, partiendo de la posibilidad de estar equivocado, intento que mis acciones sean correctas, democráticas y morales." },
    { name: "Pensamiento alternativo 'Out of the Box'", level: 85, description: "La creatividad e imaginación que me caracterizan me permiten entender los problemas que se me presentan con una aproximación tal vez distinta a la tradicional, por lo que cuando me enfrento a situaciones difíciles de resolver, confío en mi instinto para probar alternativas que tal vez otras personas no han pensado." },
    { name: "Trabajo duro", level: 90, description: "Dar el 100% en cada paso, aunque ese 100% represente sólamente una fracción de la capacidad en ese momento, es fundamental para mi forma de llevar a cabo tareas. No es posible arrepentirse cuando la entrega es total, si los resultados no son exitosos luego de haber hecho el máximo esfuerzo posible, solo queda evaluar el proceso, mejorar y crecer." },
    { name: "Creatividad y Optimismo", level: 100, description: "No hay problema que no pueda resolverse. Esa es la premisa desde la que parto al momento de enfrentar situaciones adversas, o problemas difíciles de solucionar. De esta forma, mi enfoque está orientado a la obtención de soluciones, lo que me permite encontrar rápidamente alternativas para superar problemas." },
    { name: "Respeto y Cordialidad", level: 90, description: "La comunicación respetuosa, cordial, educada y bien formulada es clave para lograr la efectividad. No solo respetar opiniones y realidades diversas, sino también comunicar ese respeto por la diferencia y utilizarla para crecer, son características clave en mi forma de ser." },
    { name: "Perseverancia", level: 95, description: "La constancia y la disciplina son aspectos claves para mejorar en cualquier actividad. Tanto en el proceso de aprendizaje, como de perfeccionamiento de habilidades, la insistencia y el manejo de la frustración son características que poseo y que me permiten superar progresivamente las dificultades que me encuentro." },
    { name: "Integridad", level: 90, description: "Tengo valores morales basados en el respeto, la libertad, la confianza y la solidaridad, y busco basar mis acciones y decisiones en esos valores, diferenciando lo correcto de lo incorrecto, y optando siempre por hacer las cosas de la mejor manera posible." },
    { name: "Autogestión y Responsabilidad", level: 90, description: "La gestión del tiempo y de los compromisos es un elemento que he desarrollado para poder obtener resultados exitosos en las múltiples actividades que he hecho, en simultáneo, a lo largo de mi vida. Ese orden y responsabilidad para cumplir con los objetivos de cada actividad me han permitido llegar a ser la persona que soy hoy." },
]

export const presentation: Presentation[] = [
    {
        title: "Bienvenido a mi (aún en desarrollo) Portfolio Personal!",
        text: "¡Hola! Soy un apasionado Ingeniero en Sistemas de Información, que tiene el objetivo de convertirse en Desarrollador Full Stack. Con una sólida base en tecnologías de gestión de datos, así como de front-end y de back-end, estoy en constante aprendizaje y mejora de mis habilidades para crear aplicaciones web robustas y fáciles de usar. Esta página está en progreso, pero no dudes en contactarme para darme tu opinión o para hablar de cualquier otro tema que consideres relevante :D",
    }
]

export const projects: ProjectItem[] = [
    {
        name: "Mi Portfolio Personal (FrontEnd)",
        description: "Aplicación web frontend para utilizar como portfolio personal y mostrar mis habilidades.",
        objective: "Demostrar mis habilidades y consolidar mis aprendizajes de programación frontend, elaborando una página web personal que me sirva para subir mi información laboral, profesional y académica. A la vez, también será usado para 'unificar' el acceso a cada proyecto y herramienta que desarrolle, validando usuarios y redireccionando a cada servicio para permitirme usar mis propias aplicaciones web desde un único acceso.",
        stackAndTools: "React, Next.js, TypeScript, TailwindCSS (CSS), HTML, Vercel (Hosting), GoogleCloud Services (reCaptcha)",
        image: "/resources/frontend-personal-portfolio-v1.jpg",
        githubLink: "https://github.com/Juam3-14/my-portfolio-frontend"
    },
    {
        name: "Mi Portfolio Personal (Backend)",
        description: "Aplicación web backend para brindar servicios de administración al frontend de mi portfolio personal.",
        objective: "Demostrar mis habilidades y consolidar mis aprendizajes de programación frontend, construyendo una aplicación backend que permita dar servicios de administración de información para su correspondiente frontend. Próximamente se hará una aplicación construída en arquitectura de microservicios para distribuir las responsabilidades de este proyecto, como la validación de usuarios y su comportamiento, el envío de notificaciones, y el redireccionamiento a los demás servicios de mis demás aplicaciones y proyectos.",
        stackAndTools: "FastAPI, Python, GoogleCloud Services (reCaptcha), SendGrid, Render (Hosting)",
        image: "/resources/backend-personal-portfolio-v1.jpg",
        githubLink: "https://github.com/Juam3-14/my-portfolio-backend"
    },
]