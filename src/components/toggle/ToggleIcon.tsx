import './ToggleIcon.css'

export default function ToggleIcon({toggled}: { toggled: boolean }) {

    return (
        <div>
            <button className="App">
                <button className={`toggle-button ${toggled ? 'toggled' : ''}`}>
                    <div className="thumb"></div>
                </button>
            </button>
        </div>
    )
}
