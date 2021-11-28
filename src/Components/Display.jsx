import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
export default function Display() {
    const { valueState } = useContext(AppContext);
    const [value, setValue] = valueState;

    return (
        <div id="display">
            <p>{value}</p>
        </div>
    )
}
