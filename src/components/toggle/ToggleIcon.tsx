import './ToggleIcon.css'

export default function ToggleIcon({isLight}: {isLight: boolean }) {

    return (
        <div>
            <button className="App">
                <button className={`toggle-button ${!isLight ? 'dark' : ''}`}>
                    <div className="thumb"></div>
                </button>
            </button>
        </div>
    )
}
