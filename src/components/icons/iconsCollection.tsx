'use client'

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import IconWithTooltip from "./IconWithTooltip";
import EmailIconButton from "./emailButton";
import { useTranslation } from "@/hooks/useTranslation"

const IconsCollection = () => {
    const { t } = useTranslation()

    return (
        <div className="flex space-x-4">
            <IconWithTooltip url="https://github.com/Juam3-14" Icon={Github} label={t('footer.github')} />
            <IconWithTooltip url="https://www.linkedin.com/in/juanpablo-piemonte/" Icon={Linkedin} label={t('footer.linkedin')} />
            <IconWithTooltip url="https://x.com/JuanPabloPiemo1" Icon={Twitter} label={t('footer.x')} />
            <EmailIconButton email="jppiemonte@gmail.com" subject={t('footer.mail_subject')} body={t('footer.mail_body')} Icon={Mail} label={t('footer.email')} />
        </div>
    );
};

export default IconsCollection