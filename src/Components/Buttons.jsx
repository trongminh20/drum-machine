import React, { useContext, useEffect } from 'react'
import Button from './Button';
import { AppContext } from '../AppContext';
import "../SCSS/pad.scss";
export default function Buttons() {
    const { valueState } = useContext(AppContext);
    const [value, setValue] = valueState;

    const soundBank = [
        {
            value: "Q",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            value: "W",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            value: "E",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            value: "A",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            value: "S",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            value: "D",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            value: "Z",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            value: "X",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            value: "C",
            sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ]

    const playSound = (id) => {
        let aud = document.getElementById(id);
        aud.play();
        let url = aud.getElementsByTagName('source')[0].src;
        setDisplay(url);
    }

    const setDisplay = (url) => {
        let name = url.split("/");
        setValue(name[name.length - 1].split(".")[0].replace(/[-_]/g, " "));
    }

    const handleKeydown = () => {
        const keyValue = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        document.addEventListener('keydown', function (e) {
            if (keyValue.indexOf(e.key.toUpperCase()) >= 0) {
                playSound(e.key.toUpperCase());
            } else {
                return;
            }
        })
    }

    useEffect(() => {
        handleKeydown();
    }, [])

    return (
        <section id="pad">
            {
                soundBank.map(s => {
                    return <div className="drum-pad">
                        <Button _id={s.value}
                            _sound={s.sound}
                            _value={s.value}
                            _handleClick={() => playSound(s.value)} />
                    </div>
                })
            }
        </section>
    )
}
