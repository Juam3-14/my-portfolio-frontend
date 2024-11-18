import Link from 'next/link';
import ThemeLanguageSwitcher from '../themeLanguageSwitcher'
import { useTranslation } from "@/hooks/useTranslation"

const Header = () => {
    const { t } = useTranslation()

    return (
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                <Link className="flex items-center justify-center" href="/#home">
                    <span className="sr-only">Juan Pablo Piemonte</span>
                    <span className="text-2xl font-bold">{t('header.title')}</span>
                </Link>
                <nav className="flex items-center gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#aboutMe">
                        {t('header.aboutMe')}
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#projects">
                        {t('header.projects')}
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#contactMe">
                        {t('header.contactMe')}
                    </Link>
                    <ThemeLanguageSwitcher />
                </nav>
            </div>
        </header>
    );
};

export default Header;