// AboutMe.tsx
import React from 'react';
import ContactMeForm from '../contactMeForm';


const ContactMe: React.FC = () => {

    return (
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Info</h1>
            <div className="grid grid-cols-1 gap-8">
                <ContactMeForm title="Contact Me" subtitle="I will answer soon :)" />
            </div>
        </div>
    );
};

export default ContactMe;
