import React from 'react'
import Buttons from './Components/Buttons'
import Display from './Components/Display'
import "./SCSS/app.scss";
export default function App() {
    return (
        <section id="drum-machine">
            <Buttons />
            <Display />
        </section>
    )
}
