'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'
type Language = 'en' | 'es'

interface AppContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    language: Language
    setLanguage: (language: Language) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')
    const [language, setLanguage] = useState<Language>('en')

    useEffect(() => {
        // Apply theme to body
        document.body.className = theme
    }, [theme])

    return (
        <AppContext.Provider value={{ theme, setTheme, language, setLanguage }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context
}