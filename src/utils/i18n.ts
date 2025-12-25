import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            brand: 'Namaste Lekhapadhi',
            welcome: 'Welcome to Namaste Lekhapadhi',
        },
    },
    np: {
        translation: {
            brand: 'नमस्ते लेखापढी',
            welcome: 'नमस्ते लेखापढीमा स्वागत छ',
        },
    },
}

i18next.use(initReactI18next).init({
    debug: true,
    resources,
    fallbackLng: 'en', // if not chosen
    lng: 'np',
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
})

export default i18next
