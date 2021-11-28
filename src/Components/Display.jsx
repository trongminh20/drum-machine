import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import "../SCSS/display.scss";
export default function Display() {
    const { valueState } = useContext(AppContext);
    const [value, setValue] = valueState;

    return (
        <section id="display">
            <h4>Sound's name</h4>
            <div id="value">{value}</div>
        </section>
    )
}
