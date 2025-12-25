import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NepaliDate from 'nepali-date-converter'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle.tsx'
import { useTranslation } from 'react-i18next'

type NavLinkItem = {
    name: string
    link: string
}

console.log('mode', import.meta.env.MODE) // "development" | "production"
console.log('base url', import.meta.env.BASE_URL)

const brand = import.meta.env.BASE_URL + 'images/brand.svg'

const navLinks: NavLinkItem[] = [
    { name: 'गृहपृष्ठ', link: '/' },
    { name: 'हाम्रो बारे', link: '/about' },
    { name: 'सेवाहरू', link: '/services' },
    { name: 'जानकारी', link: '/janakari' },
    { name: 'ब्लगहरू', link: '/blogs' },
    { name: 'फोटो ग्यालरी', link: '/gallery' },
    { name: 'सम्पर्क', link: '/contact' },
]

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { t, i18n } = useTranslation()

    function toNepaliDigits(num: number | string) {
        const nepaliNums = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
        return num.toString().replace(/\d/g, d => nepaliNums[parseInt(d)])
    }

    function getNepalTimeNepali() {
        const now = new Date()
        const nptTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }))
        const hours = nptTime.getHours()
        const minutes = String(nptTime.getMinutes()).padStart(2, '0')
        const seconds = String(nptTime.getSeconds()).padStart(2, '0')

        let period = 'बिहान'
        if (hours >= 12) period = 'दिउँसो'
        if (hours >= 16) period = 'साँझ'
        if (hours >= 19) period = 'बेलुका'

        const hour12 = hours % 12 || 12
        return `${period} ${toNepaliDigits(hour12)}:${toNepaliDigits(minutes)}:${toNepaliDigits(seconds)}`
    }

    function getNepaliDateShortcut(): string {
        const date = new NepaliDate()
        const year = date.getYear()
        const month = date.getMonth()
        const day = date.getDate()

        const nepaliWeekdays = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार']
        const nepaliMonths = [
            'बैशाख',
            'जेठ',
            'असार',
            'श्रावण',
            'भाद्र',
            'आश्विन',
            'कार्तिक',
            'मंसिर',
            'पौष',
            'माघ',
            'फाल्गुण',
            'चैत्र',
        ]

        return `${nepaliMonths[month]} ${toNepaliDigits(day)}, ${toNepaliDigits(year)}, ${nepaliWeekdays[date.getDay()]}, ${getNepalTimeNepali()}`
    }

    const [dateTime, setDateTime] = useState(getNepaliDateShortcut())

    useEffect(() => {
        const timer = setInterval(() => setDateTime(getNepaliDateShortcut()), 1000)
        return () => clearInterval(timer)
    }, [])

    const getNavClass = ({ isActive }: { isActive: boolean }) => {
        const style = localStorage.getItem('theme') != 'dark' ? 'gradient-text font-bold' : 'text-cyan-500 font-bold'
        return `${isActive ? style : 'text-black dark:text-white hover:text-blue-600'} transition`
    }

    const currentLang = i18n.language ?? 'en'

    const toggleLanguage = () => {
        i18n.changeLanguage(currentLang === 'en' ? 'np' : 'en')
    }

    return (
        <header className="fixed top-0 z-50 w-full">
            <div className="bg-light-gradient bg-dark-gradient flex h-11 items-center justify-end gap-2 px-4 text-xs text-white sm:px-6 sm:text-sm">
                <ThemeToggle />
                <button
                    className="dark:bg-midnight cursor-pointer rounded-full border border-blue-100 bg-blue-100 p-2 font-bold text-black dark:text-white"
                    onClick={toggleLanguage}
                >
                    {' '}
                    {currentLang.startsWith('en') ? 'NP' : 'EN'}
                </button>
                <p className="w-80 text-center">{dateTime}</p>
            </div>
            <nav className="dark:border-midnight-light1 z-50 flex h-[var(--header-height)] flex-col items-center justify-between border-b border-gray-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md sm:px-6 dark:bg-gray-800 [@media(min-width:1100px)]:flex-row">
                <Link to="/" className="flex items-center space-x-3 self-auto [@media(max-width:1100px)]:self-start">
                    <img src={brand} height="60" width="60" alt="नमस्ते लोगो" className="object-contain" />
                    <span className="gradient-text py-2 text-2xl font-bold sm:text-3xl md:text-4xl">{t('brand')}</span>
                </Link>

                <div className="flex flex-col items-center space-y-2 self-auto text-xl md:flex-row md:space-y-0 md:space-x-10 [@media(max-width:1100px)]:self-end [@media(max-width:1100px)]:pb-4 [@media(max-width:900px)]:hidden">
                    {navLinks.map(link => (
                        <NavLink key={link.name} to={link.link} end={link.link === '/'} className={getNavClass}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="absolute top-0 right-0 z-50 m-4 [@media(min-width:900px)]:hidden">
                    <button
                        className="text-3xl text-gray-700 focus:outline-none dark:text-white [@media(min-width:900px)]:block"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="menu"
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="flex flex-col space-y-4 bg-white px-4 py-4 text-lg shadow-lg sm:px-6 dark:bg-gray-800">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.name}
                            to={link.link}
                            end={link.link === '/'}
                            className={getNavClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    )
}
