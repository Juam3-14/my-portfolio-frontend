'use client'

import ProjectCard from "../projectCard"
import { useAppContext } from "@/context/AppContext"

import { projects as projectsMadeEng } from '@/data/data_eng'
import { projects as projectsMadeSpa } from '@/data/data_spa'

import { useTranslation } from "@/hooks/useTranslation"

const Projects: React.FC = () => {
    const { t } = useTranslation()
    const { language } = useAppContext()

    const isEnglish = language === 'en'
    const projectsMade = isEnglish ? projectsMadeEng : projectsMadeSpa

    return (
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{t('header.projects')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {projectsMade.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
};

export default Projects;