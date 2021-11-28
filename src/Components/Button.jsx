import React from 'react'
import "../SCSS/btn.scss";
export default function Button({ _value, _handleClick, _id, _sound }) {
    return (
        <>
            <audio id={_id}>
                <source src={_sound} type="audio/mp3" />
            </audio>
            <button onClick={_handleClick} className="btn drum-pad">{_value}</button>
        </>
    )
}
