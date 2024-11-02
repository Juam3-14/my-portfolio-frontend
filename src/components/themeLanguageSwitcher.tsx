'use client'

import { useAppContext } from '../context/AppContext'
import { Button } from '@/components/ui/button'

export default function ThemeLanguageSwitcher() {
    const { theme, setTheme, language, setLanguage } = useAppContext()

    return (
        <div className="flex space-x-4">
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                variant="outline"
            >
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Button>
            <Button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                variant="outline"
            >
                {language === 'en' ? 'English' : 'Español'}
            </Button>
        </div>
    )
}