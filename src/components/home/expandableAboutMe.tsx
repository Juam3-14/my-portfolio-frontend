'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { EyeIcon, FileText } from "lucide-react"
import AboutMe from "@/components/home/aboutMe"
import SkillCards from '@/components/skillCards'
import { knownTools as knownToolsEng, knownSkills as knownSkillsEng } from '@/data/data_eng'
import { knownTools as knownToolsSpa, knownSkills as knownSkillsSpa } from '@/data/data_spa'
import { useAppContext } from '@/context/AppContext'

export default function ExpandableAboutMe() {
    const [showMoreAboutMe, setShowMoreAboutMe] = useState(false)
    const { language } = useAppContext()

    const isEnglish = language === 'en'

    const knownTools = isEnglish ? knownToolsEng : knownToolsSpa
    const knownSkills = isEnglish ? knownSkillsEng : knownSkillsSpa

    // Send this into the data files to be mapped directly from the file
    const showMoreText = isEnglish ? 'Show More' : 'Mostrar Más'
    const showLessText = isEnglish ? 'Show Less' : 'Mostrar Menos'
    const viewResumeEnglish = isEnglish ? 'View Resume (English)' : 'Ver Currículum (Inglés)'
    const viewResumeSpanish = isEnglish ? 'View Resume (Spanish)' : 'Ver Currículum (Español)'
    const toolsTitle = isEnglish ? 'Tools' : 'Herramientas'
    const toolsSubtitle = isEnglish
        ? 'Proficiency levels: from 0% (beginner) to 100% (expert)'
        : 'Niveles de competencia: desde 0% (principiante) hasta 100% (experto)'
    const skillsTitle = isEnglish ? 'Skills' : 'Habilidades'
    const skillsSubtitle = isEnglish
        ? 'Proficiency levels: highlighting areas of personal and professional strength'
        : 'Niveles de competencia: destacando áreas de fortaleza personal y profesional'
    // ------------------------------------------------------------------------------------------

    return (
        <section id="aboutMe" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <AboutMe />
            <div className="flex justify-center mt-6">
                <Button
                    variant="outline"
                    className="flex items-center space-x-2"
                    onClick={() => setShowMoreAboutMe(!showMoreAboutMe)}
                >
                    <EyeIcon className="h-6 w-6" />
                    <span>{showMoreAboutMe ? showLessText : showMoreText}</span>
                </Button>
            </div>

            <AnimatePresence>
                {showMoreAboutMe && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="mt-12 container px-4 md:px-6 max-w-7xl mx-auto">
                            <div className="text-center flex justify-center space-x-4 mb-12">
                                <Button asChild>
                                    <a href="resources/Res_JuanPabloPiemonte.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                        <FileText className="mr-2 h-4 w-4" />
                                        {viewResumeEnglish}
                                    </a>
                                </Button>
                                <Button asChild>
                                    <a href="resources/CV_JuanPabloPiemonte.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                        <FileText className="mr-2 h-4 w-4" />
                                        {viewResumeSpanish}
                                    </a>
                                </Button>
                            </div>
                            <SkillCards
                                skills={knownTools}
                                title={toolsTitle}
                                subtitle={toolsSubtitle}
                            />
                            <SkillCards
                                skills={knownSkills}
                                title={skillsTitle}
                                subtitle={skillsSubtitle}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}