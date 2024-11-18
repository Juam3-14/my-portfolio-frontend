'use client'

import { useAppContext } from '../context/AppContext'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import Image from 'next/image'

export default function ThemeLanguageSwitcher() {
    const { theme, setTheme, language, setLanguage } = useAppContext()

    return (
        <div className="flex items-center space-x-2">
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
                {theme === 'dark' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
            <Button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                variant="ghost"
                size="icon"
                className="w-9 h-9  p-0 overflow-hidden"
                aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            >
                <Image
                    src={language === 'en' ? 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' : 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg'}
                    alt={language === 'en' ? 'USA flag' : 'Argentina flag'}
                    width={36}
                    height={36}
                    className="object-cover"
                />
            </Button>
        </div>
    )
}