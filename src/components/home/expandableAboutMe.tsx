'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { EyeIcon, FileText } from "lucide-react"
import AboutMe from "@/components/home/aboutMe"
import SkillCards from '@/components/skillCards'
import { knownTools, knownSkills } from '@/data/data'

export default function ExpandableAboutMe() {
    const [showMoreAboutMe, setShowMoreAboutMe] = useState(false)

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
                    <span>{showMoreAboutMe ? 'Show Less' : 'Show More'}</span>
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
                                        View Resume (English)
                                    </a>
                                </Button>
                                <Button asChild>
                                    <a href="resources/CV_JuanPabloPiemonte.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                        <FileText className="mr-2 h-4 w-4" />
                                        View Resume (Spanish)
                                    </a>
                                </Button>
                            </div>
                            <SkillCards
                                skills={knownTools}
                                title="Tools"
                                subtitle="Proficiency levels: from 0% (beginner) to 100% (expert)"
                            />
                            <SkillCards
                                skills={knownSkills}
                                title="Skills"
                                subtitle="Proficiency levels: highlighting areas of personal and professional strength"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}