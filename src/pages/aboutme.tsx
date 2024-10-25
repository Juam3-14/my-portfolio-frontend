"use client"

import '../app/globals.css'

import { Button } from "@/components/ui/button"
import { FileText, } from "lucide-react"

import AboutMe from '@/components/home/aboutMe'
import Header from '@/components/layouts/Header'
import Footer from "@/components/layouts/Footer"

import { knownTools, knownSkills } from '@/data/data'
import SkillCards from '@/components/skillCards'

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <Header />
            <main className="flex-1 py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <AboutMe />
                    <div className="mt-12 text-center flex justify-center space-x-4">
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
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage