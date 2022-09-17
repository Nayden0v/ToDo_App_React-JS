// import React, { Component } from 'react'

import {createRef, useState } from "react";

export default function AddTodo(props) {

    let inputField = createRef()

    const [value, setValue] = useState("")

    function addItem(e) {
        if (inputField.value !== "") {
            props.addTodo(value)
            inputField.current.value="";
            setValue("");
            inputField.current.focus();
        };

        e.preventDefault();
        console.log(inputField.current.value);

    }

        return (
            <form className="input--container">
                <input name="name" ref={inputField} autoFocus type="text" placeholder="Enter your todo..." onChange={(e)=>{setValue(e.target.value)}}/>
                {!value?null:<button type="submit" className="btn--add" onClick={addItem}>Add todo</button>}
                {props.items.length===0?null:<button className="btn--clear" onClick={()=>props.clearList()}>Clear</button>}
            </form>
            
        );
    
}
