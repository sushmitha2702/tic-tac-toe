import React from 'react'

const Square = (props) => {
    return (
        <button
            className={`square ${props.currentSelectionIndex != null ? "tile-bg-color zoom-in-out-box" : ""}
            ${props.value === "X" ? "x-text-color": "o-text-color" }`}
            onClick={props.onClick}
        > {props.value}
        </button >
    )
}

export default Square;