// data.ts
import { CareerExperienceItem, EducationItem, CourseItem, SkillCardProps, Presentation, Project } from './types';

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
        position: "PL-SQL Developer / Database Administrator / Data Engineer",
        period: "May 2017 - Mar 2024",
        description: "I joined CIDS as an intern through an 'Induction Program for Freshman Students in Software Development.' During my first year, while studying the basics of Information Systems and Computer Science, I participated in requirements analysis, solution design, and documentation for initial projects (2017-2018). Later, as I gained a clearer understanding of my career path, I contributed as a QA tester, performing manual testing, project documentation, test case design and execution, and data validation (2018-2020). Once I had progressed further in my studies, I transitioned to the CIDS team of data management, working as a DBA and PL/SQL developer on various projects. Eventually, I made my first steps on backend development: maintaining and developing (mostly) relational databases, and creating the .NET framework endpoints that utilized the stored procedures I had written (2020-2024).",
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
    { name: "Python", level: 70, description: "I have worked on several projects in data analysis and web development, using Python as my main programming language for academic work and personal projects. This experience allowed me to deepen my understanding of Python's capabilities and apply it effectively in real-world scenarios." },
    { name: "PL/SQL", level: 75, description: "I have experience in developing databases and writing PL/SQL scripts for process automation. This work has enabled me to streamline operations and improve efficiency by automating repetitive tasks, allowing for better data management and analysis." },
    { name: "Typescript", level: 55, description: "I use TypeScript in my frontend projects to enhance code quality. By leveraging its strong typing and error-checking features, I can catch potential issues early in the development process, leading to more robust and maintainable applications." },
    { name: "Javascript", level: 55, description: "I develop new features in interactive web applications using JavaScript, particularly with Node.js. This experience allows me to create dynamic server-side applications and enhance user interactions, making the overall experience more engaging and responsive." },
    { name: "FastAPI", level: 60, description: "I build fast and efficient APIs with FastAPI. This framework allows me to create robust endpoints quickly, leveraging its asynchronous capabilities and automatic data validation to enhance performance and ensure reliability in my applications." },
    { name: "React.js", level: 75, description: "I develop user interfaces with React, focusing on component reuse. This approach allows me to create modular and maintainable code, enhancing the overall efficiency of my projects while providing a consistent user experience across different parts of the application." },
    { name: "Docker", level: 60, description: "I use Docker for containerizing applications and services. This technology allows me to create isolated environments, ensuring consistency across development, testing, and production stages, which simplifies deployment and improves scalability." },
    { name: "Git", level: 70, description: "I manage project versions using Git. This version control system enables me to track changes, collaborate with team members, and maintain a history of modifications, ensuring a structured and efficient workflow throughout the development process." },
    { name: "Agile/Scrum", level: 70, description: "I am comfortable working in an agile and organized manner. I have participated in several teams that implemented the Scrum methodology in their daily routines to plan and execute tasks effectively." },
]

export const knownSkills: SkillCardProps[] = [
    { name: "Problem Solving", level: 85, description: "I enjoy solving complex problems by proposing simple solutions. With methodical and tidy reasoning, I reach conclusions that integrate all the knowledge I possess to obtain the best possible solution to a problem." },
    { name: "Teamwork", level: 95, description: "Team activities, such as sports, projects, work, and other playful activities, have transformed me into an intrinsically collaborative person, who knows that achieving synergistic cooperation is key to enhancing each team member's skills." },
    { name: "Fast Learning", level: 80, description: "The simple act of learning brings me great satisfaction, which facilitates my study, implementation, and acquisition of new knowledge, tools, and technologies." },
    { name: "Solution Design", level: 85, description: "Designing solutions in a way that is easily understandable is something I enjoy. With tidy and informative diagrams and schematics, I manage to describe both problems and their solutions." },
    { name: "Critical Thinking", level: 95, description: "I strive to reach conclusions that guide my actions in a critical and methodical manner. Acknowledging the possibility of being wrong, I aim for my actions to be correct, democratic, and moral." },
    { name: "Alternative Thinking 'Out of the Box'", level: 85, description: "The creativity and imagination that characterize me allow me to understand the problems I face from an approach that may differ from the traditional one. Therefore, when confronted with difficult situations, I trust my instincts to try alternatives that others may not have considered." },
    { name: "Hard Work", level: 90, description: "Giving 100% in every step, even if that 100% represents only a fraction of my capacity at that moment, is fundamental to how I carry out tasks. There is no room for regret when the effort is total; if the results are not successful after giving my best, I only need to evaluate the process, improve, and grow." },
    { name: "Creativity and Optimism", level: 100, description: "There is no problem that cannot be solved. This is the premise from which I approach adverse situations or difficult problems. In this way, my focus is oriented towards finding solutions, which allows me to quickly find alternatives to overcome issues." },
    { name: "Respect and Kindness", level: 90, description: "Respectful, cordial, polite, and well-formulated communication is key to achieving effectiveness. Not only respecting diverse opinions and realities, but also communicating that respect for differences and using it for growth are key characteristics of my personality." },
    { name: "Perseverance", level: 95, description: "Consistency and discipline are key aspects for improving in any activity. Both in the learning process and in skill refinement, persistence and the ability to manage frustration are traits I possess that allow me to progressively overcome difficulties." },
    { name: "Integrity", level: 90, description: "I hold moral values based on respect, freedom, trust, and solidarity, and I seek to base my actions and decisions on those values, differentiating right from wrong, and always opting to do things in the best possible way." },
    { name: "Self-Management and Responsibility", level: 90, description: "Time management and commitment are elements I have developed to achieve successful results in the multiple activities I have undertaken simultaneously throughout my life. This order and responsibility to meet the objectives of each activity have allowed me to become the person I am today." },
]

export const presentation: Presentation[] = [
    {
        title: "Welcome to my still-in-progress Personal Portfolio!",
        text: "Hi! I'm a passionate Information Systems Engineer on a journey to become a Full Stack Developer. With a strong foundation in both front-end and back-end technologies, I'm constantly learning and improving my skills to create robust and user-friendly web applications. This page is currently in progress, but feel free to contact me for feedback or any other topic :D",
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