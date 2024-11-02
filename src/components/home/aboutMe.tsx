// AboutMe.tsx
import React from 'react';
import CareerExperience from '../careerExperience';
import Education from '../education';
import Courses from '../courses';
import { useAppContext } from '@/context/AppContext'

import { careerExperienceData as careerExperienceEng, educationData as educationDataEng, coursesData as coursesDataEng, coursesData } from '@/data/data_eng';
import { careerExperienceData as careerExperienceSpa, educationData as educationDataSpa, coursesData as coursesDataSpa } from '@/data/data_spa';

const AboutMe: React.FC = () => {

    const { language } = useAppContext()
    const isEnglish = language === 'en'

    const careerExperienceData = isEnglish ? careerExperienceEng : careerExperienceSpa
    const educationData = isEnglish ? educationDataEng : educationDataSpa
    const coursesData = isEnglish ? coursesDataEng : coursesDataSpa

    return (
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">About Me</h1>
            <div className="grid grid-cols-1 gap-8">
                <CareerExperience jobs={careerExperienceData} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Education education={educationData} />
                    <Courses courses={coursesData} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
