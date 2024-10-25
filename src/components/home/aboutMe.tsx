// AboutMe.tsx
import React from 'react';
import CareerExperience from '../careerExperience';
import Education from '../education';
import Courses from '../courses';

import { careerExperienceData, educationData, coursesData } from '@/data/data';


const AboutMe: React.FC = () => {

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
