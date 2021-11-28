import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppContextProvider = props => {
    const [value, setValue] = useState();
    const [sound, setSound] = useState();

    const states = {
        valueState: [value, setValue],
        soundState: [sound, setSound]
    }
    return <AppContext.Provider value={states}>
        {props.children}
    </AppContext.Provider>
}