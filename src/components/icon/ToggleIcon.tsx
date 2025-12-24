import {useState} from "react";
import './ToggleIcon.css'

export default function ToggleIcon() {

    const [toggled, setToggled] = useState(false);

    return (
        <div>
            <button className="App">
                <button className={`toggle-button ${toggled ? 'toggled' : ''}`} onClick={() =>
                    setToggled(!toggled)
                }>
                    <div className="thumb">
                    </div>
                </button>
            </button>
        </div>
    )
}