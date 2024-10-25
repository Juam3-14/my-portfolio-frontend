// data.ts
import { CareerExperienceItem, EducationItem, CourseItem, SkillCardProps } from './types';

export const careerExperienceData: CareerExperienceItem[] = [
    {
        company: "BircleAI",
        position: "Full Stack Developer",
        period: "Apr 2024 - Oct 2024",
        description: "Full-stack developer at the fintech startup BircleAI, responsible for the design, development, configuration, and maintenance of infrastructure (AWS), architecture (Microservices), backend (Python - FastAPI), frontend (React.js - Next.js - TypeScript), databases (SQL and NoSQL), and implementing LLMs for Retrieval-Augmented Generation for many use cases.",
        tools: ["Python", "FastAPI", "React", "Next.js", "TypeScript", "AWS", "MongoDB - DynamoDB", "CI/CD", "Git",],
        responsibilities: [
            "Architecting and implementing new features, handling frontend, backend, and DevOps tasks.",
            "Designing scalable data structures to support web applications.",
            "Improving and optimizing application performance.",
            "Mentoring junior developers, focusing on object-oriented programming and best coding practices.",
            "Collaborating directly with the CTO, providing key insights on the development process and contributing to technical decision-making."
        ],
    },
    {
        company: "CIDS (Center of Investigation and Development of Software) - UTN FRC",
        position: "Software Developer",
        period: "May 2017 - Mar 2024",
        description: "I joined CIDS as an intern through an 'Induction Program for Freshman Students in Software Development.' During my first year, while studying the basics of Information Systems and Computer Science, I participated in requirements analysis, solution design, and documentation for initial projects (2017-2018). Later, as I gained a clearer understanding of my career path, I contributed as a QA tester, performing manual testing, project documentation, test case design and execution, and data validation (2018-2020). Once I had progressed further in my studies, I transitioned to the CIDS database team, working as a DBA and PL/SQL developer on various projects. Eventually, I began focusing on backend development, maintaining and developing relational databases, and creating the .NET framework endpoints that utilized the stored procedures I had written(2020-2024).",
        tools: ["Postman", "Oracle PL/SQL", "MySQL", "PostgreSQL", ".NET Framework", "Microsoft PowerBI", "Python", "Git", "Scrum", "Agile"],
        responsibilities: [
            "Mantaining and developing productive and pre-productive relational databases",
            "Stored procedures development, mantenaince and implementation in RESTful APIs",
            "ETL workflow for loading data into data warehouses.",
            "Design, maintenance, and development of Business Intelligence dashboards.",
            "Design and execution of test plans and test cases",
            "Project and product documentation",
            "Collaborating with multidisciplinary teams from both development and client sides."
        ],
    },
];

export const educationData: EducationItem[] = [
    {
        degree: "Engineer in Information Systems",
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
    { name: "Problem solving", level: 85, description: "Soy un tipazo." },
    { name: "Teamworking", level: 95, description: "Soy un tipazo." },
    { name: "Fast learning", level: 80, description: "Soy un tipazo." },
    { name: "Solutions design", level: 85, description: "Soy un tipazo." },
    { name: "Critical thinking", level: 95, description: "Soy un tipazo." },
    { name: "Thinking 'Out of the box'", level: 85, description: "Soy un tipazo." },
    { name: "Hardworking", level: 90, description: "Soy un tipazo." },
    { name: "Creativity and optimism", level: 100, description: "Soy un tipazo." },
    { name: "Respect and cordiality", level: 90, description: "Soy un tipazo." },
    { name: "Perseverance", level: 95, description: "Soy un tipazo." },
    { name: "Integrity", level: 90, description: "Soy un tipazo." },
    { name: "Self Management", level: 90, description: "Soy un tipazo." },
]