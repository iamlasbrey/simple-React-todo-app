import React from 'react'
import './Container.css'

const Container = (props) => {
    const style ={
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#EF9595",
        marginBottom:"1em",
        borderRadius: '10px',
        fontSize: ".8rem",
        alignItems: "center",
        padding: "5px 5px",
        fontFamily: "mada",
        color: "white",
        fontWeight: "bold"
    }
    return(
        <div style={style}>
                <div>{props.variousskills}</div>
                <button className="delete" onClick={props.clicked}>X</button>
            </div>
    )
}



export default Container