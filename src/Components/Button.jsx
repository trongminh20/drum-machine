import React from 'react'
import "../SCSS/btn.scss";
import { mouseLeave, mouseOver } from "../Events";
export default function Button({ _value, _handleClick, _id, _sound }) {
    return (
        <div className="drum-pad btn"
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={_handleClick} >
            <audio id={_id}>
                <source src={_sound} type="audio/mp3" />
            </audio>
            {_value}
        </div>
    )
}
