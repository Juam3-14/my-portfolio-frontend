'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import IconWithTooltip from "../icons/IconWithTooltip"
import IconsCollection from "../icons/iconsCollection";

const Footer = () => {
    return (
        <footer id="contact" className="w-full max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Juan Pablo Piemonte. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <IconsCollection />
            </nav>
        </footer>
    );
};

export default Footer;