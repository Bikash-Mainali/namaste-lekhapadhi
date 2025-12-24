import {useState, useEffect} from 'react'
import ToggleIcon from './toggle/ToggleIcon.tsx'

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
}

export default function ThemeToggle() {
    const [toggled, setToggled] = useState(false)

    const [theme, setTheme] = useState<string>(() => {
        // Try to read from localStorage first
        const stored = localStorage.getItem('theme')
        if (stored === THEMES.LIGHT || stored === THEMES.DARK) return stored

        // Fallback to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === THEMES.DARK)
    }, [theme])

    const onToggle = () => {
        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
        setToggled(!toggled);
    }

    return (
        <>
            <button onClick={onToggle}>
                <ToggleIcon toggled={toggled}></ToggleIcon>
            </button>
        </>
    )
}
