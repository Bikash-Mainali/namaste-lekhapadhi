import './ToggleIcon.css'

export default function ToggleIcon({ isLight }: { isLight: boolean }) {
    return (
        <div className={`toggle-button ${!isLight ? 'dark' : ''}`}>
            <div className="thumb"></div>
        </div>
    )
}
