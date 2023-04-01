import React from "react";

export default function Die(props) {
    const styles ={
        backgroundColor: props.isHeld ? "brown" : "white"
    }
    return (
        <div className="die-face" style={styles} onClick={props.rollDice} >
            <h2 className="die-text">{props.value}</h2>
        </div>
    )
}