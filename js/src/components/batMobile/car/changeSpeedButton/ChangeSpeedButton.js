import React from "react"
import styles from "./ChangeSpeedButton.css"

export function ChangeSpeedButton(props) {
    return (
        <button className="change-speed-buttons container-fluid" onClick={props.onClick}>
        {props.value}
        </button>
     );
}
