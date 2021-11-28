import React from 'react'

export default function Input({ _inputType, _handleChange }) {
    return (
        <input type={_inputType} onChange={_handleChange} />
    )
}
