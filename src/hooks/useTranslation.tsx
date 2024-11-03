import { useAppContext } from '@/context/AppContext'
import translations from '@/translations'

export function useTranslation() {
    const { language } = useAppContext()

    function t(key: string): string {
        const keys = key.split('.')
        let value: any = translations[language]

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k]
            } else {
                return key // Return the key if translation is not found
            }
        }

        return typeof value === 'string' ? value : key
    }

    return { t }
}