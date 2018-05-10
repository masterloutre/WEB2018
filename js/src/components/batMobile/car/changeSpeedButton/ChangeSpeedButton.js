import React from "react"
import styles from "./ChangeSpeedButton.css"

export function ChangeSpeedButton(props) {
    return (
        <button className="changeSpeedButton container-fluid" onClick={props.onClick}>
        {props.value}
        </button>
     );
}
