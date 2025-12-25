import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle.tsx'
import { useTranslation } from 'react-i18next'
import { getNepaliDateShortcut, getEnglishDateShortcut } from '../utils/date.ts'

type NavLinkItem = {
    name: string
    link: string
}

console.log('mode', import.meta.env.MODE) // "development" | "production"
console.log('base url', import.meta.env.BASE_URL)

const brand = import.meta.env.BASE_URL + 'images/brand.svg'

const navLinks: NavLinkItem[] = [
    { name: 'home', link: '/' },
    { name: 'about', link: '/about' },
    { name: 'service', link: '/services' },
    { name: 'info', link: '/janakari' },
    { name: 'blog', link: '/blogs' },
    { name: 'gallery', link: '/gallery' },
    { name: 'contact', link: '/contact' },
]

export default function Header() {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language ?? 'en'
    const [menuOpen, setMenuOpen] = useState(false)
    const [dateTime, setDateTime] = useState(() => {
        return currentLang === 'np' ? getNepaliDateShortcut() : getEnglishDateShortcut()
    })
    useEffect(() => {
        const changeDateTimeImmediately = () => {
            setDateTime(currentLang === 'np' ? getNepaliDateShortcut() : getEnglishDateShortcut())
        }
        changeDateTimeImmediately()
        const timer = setInterval(changeDateTimeImmediately, 1000)
        return () => clearInterval(timer)
    }, [currentLang])

    const getNavClass = ({ isActive }: { isActive: boolean }) => {
        const style = localStorage.getItem('theme') != 'dark' ? 'gradient-text font-bold' : 'text-cyan-500 font-bold'
        return `${isActive ? style : 'text-black dark:text-white hover:text-blue-600'} transition`
    }

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
                        <NavLink
                            key={t(link.name)}
                            to={t(link.link)}
                            end={t(link.link) === '/'}
                            className={getNavClass}
                        >
                            {t('menu.' + link.name)}
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
                            key={t(link.name)}
                            to={t(link.link)}
                            end={t(link.link) === '/'}
                            className={getNavClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            {t('menu.' + link.name)}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    )
}
