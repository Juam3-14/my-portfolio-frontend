// types.ts
export interface CareerExperienceItem {
    company: string;
    position: string;
    period: string;
    description: string;
    tools: string[];
    responsibilities: string[]
}

export interface EducationItem {
    institution: string;
    degree: string;
    year: string;
}

export interface CourseItem {
    name: string;
    provider: string;
    completionDate: string;
}

export interface SkillCardProps {
    name: string;
    level: number;
    description: string;
}

export interface Presentation {
    title: string;
    text: string;
}

export interface ProjectItem {
    name: string;
    description: string;
    objective: string;
    stackAndTools: string;
    image: string;
    githubLink: string;
}