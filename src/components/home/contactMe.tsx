'use client'

import React from 'react';
import ContactMeForm from '../contactMeForm';

import { useTranslation } from "@/hooks/useTranslation"


const ContactMe: React.FC = () => {
    const { t } = useTranslation()

    return (
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{t('contactMe.header')}</h1>
            <div className="grid grid-cols-1 gap-8">
                <ContactMeForm title={t('contactMe.title')} subtitle={t('contactMe.subtitle')} />
            </div>
        </div>
    );
};

export default ContactMe;
