'use client'

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import IconWithTooltip from "./IconWithTooltip";
import EmailIconButton from "./emailButton";

const IconsCollection = () => {
    return (
        <div className="flex space-x-4">
            <IconWithTooltip url="https://github.com/Juam3-14" Icon={Github} label="GitHub" />
            <IconWithTooltip url="https://www.linkedin.com/in/juanpablo-piemonte/" Icon={Linkedin} label="LinkedIn" />
            <IconWithTooltip url="https://x.com/JuanPabloPiemo1" Icon={Twitter} label="X - Twitter" />
            <EmailIconButton email="jppiemonte@gmail.com" subject="Consulta desde portfolio de Juan Pablo Piemonte" body="Hola! Me gustaría ponerme en contacto para..." Icon={Mail} label="Send Email" />
        </div>
    );
};

export default IconsCollection