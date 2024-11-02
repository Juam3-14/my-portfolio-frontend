type TranslationKey = string
type TranslationValue = string | { [key: string]: TranslationValue }

const translations: { [key: string]: { [key: string]: TranslationValue } } = {
    en: {
        header: {
            title: "My Portfolio",
            aboutMe: "About Me",
            projects: "Projects",
            contactMe: "Contact Info"
        },
        footer: {
            rights: "© 2024 Juan Pablo Piemonte. All rights reserved.",
            github: "GitHub",
            linkedin: "LinkedIn",
            x: "X / Twitter",
            email: "Send Email",
            mail_subject: "Message from Juan Pablo Piemonte's portfolio",
            mail_body: "Hi! I'd like send you a message because...",
        },
        landing: {
            degree: "Information Systems Engineer",
        },
        contactMe: {
            header: "Contact Info",
            title: "Contact me",
            subtitle: "I will answer soon :)",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            phone: "Phone number (Opt)",
            message: "Message (max 1200 characters)",
            max_message: "/1200",
            send_label: "Send Message",
            sending_label: "Sending...",
            error_msg: "There was an error sending the message. Please try again.",
            success_title: "Message sent succesfully!",
            success_text: "Thanks for your message! You will recieve a confirmation email soon.",
            new_msg: "Send another message"
        },
        education: {
            title: "Education",
        },
        workExperience: {
            title: "Career & Experience",
            tools: "Tools & Technologies:",
            tasks: "Key Responsibilities:",
        },
        courses: {
            title: "Courses & Certificates"
        },
        // Add more English translations here
    },
    es: {
        header: {
            title: "My Portfolio",
            aboutMe: "Sobre mí",
            projects: "Proyectos",
            contactMe: "Contacto"
        },
        footer: {
            rights: "© 2024 Juan Pablo Piemonte. Todos los derechos reservados.",
            github: "GitHub",
            linkedin: "LinkedIn",
            x: "X / Twitter",
            email: "Mandar Email",
            mail_subject: "Consulta desde portfolio de Juan Pablo Piemonte",
            mail_body: "Hola! Me gustaría ponerme en contacto para...",
        },
        landing: {
            degree: "Ingeniero en Sistemas de Información",
        },
        contactMe: {
            header: "Información de Contacto",
            title: "Mandame un mensaje",
            subtitle: "Contestaré pronto :)",
            firstName: "Nombre",
            lastName: "Apellido",
            email: "Correo Electrónico",
            phone: "Teléfono (Opcional)",
            message: "Mensaje (Máximo 1200 caracteres)",
            max_message: "/1200",
            send_label: "Enviar Mensaje",
            sending_label: "Enviando...",
            error_msg: "Hubo un error al enviar el mensaje, por favor intente nuevamente.",
            success_title: "Mensaje enviado con éxito!",
            success_text: "Gracias por ponerte en contacto! Recibirás un email de confirmación a la brevedad.",
            new_msg: "Enviar otro mensaje"
        },
        education: {
            title: "Educación",
        },
        workExperience: {
            title: "Experiencia Laboral",
            tools: "Herramientas y Tecnologías",
            tasks: "Responsabilidades Clave",
        },
        courses: {
            title: "Cursos y Certificaciones"
        },
        // Add more Spanish translations here
    },
    // Add more languages as needed
}

export default translations