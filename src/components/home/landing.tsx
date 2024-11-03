'use client'

import Image from "next/image"
import IconsCollection from "../icons/iconsCollection"

import { presentation as presentationEng } from '@/data/data_eng';
import { presentation as presentationSpa } from '@/data/data_spa';
import { useAppContext } from '@/context/AppContext'

import { useTranslation } from "@/hooks/useTranslation"


const LandingSection: React.FC = () => {
    const { language } = useAppContext()

    const isEnglish = language === 'en'
    const presentation = isEnglish ? presentationEng : presentationSpa

    const { t } = useTranslation()

    return (
        <div className="container px-4 md:px-6 max-w-7xl mx-auto pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Image
                        src="/resources/FotoCV.png"
                        alt="Juan Pablo Piemonte"
                        width={350}
                        height={300}
                        className="rounded-full border-4 border-primary priority"
                    />
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Juan Pablo Piemonte
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {t('landing.degree')}
                    </p>
                    <IconsCollection />
                </div>
                <div className="space-y-4 flex flex-col">
                    {presentation.map((item, index) => (
                        <div key={index} className="space-y-2">
                            {item.title && <h2 className="text-2xl font-semibold">{item.title}</h2>}
                            <p className="text-lg text-muted-foreground">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingSection;