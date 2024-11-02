'use client'

import IconsCollection from "../icons/iconsCollection";
import { useTranslation } from "@/hooks/useTranslation"


const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer id="contact" className="w-full max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('footer.rights')}</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <IconsCollection />
            </nav>
        </footer>
    );
};

export default Footer;