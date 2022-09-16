import { useState } from "react";
import React from "react";
import { useEffect } from "react";
// import ReactDOM from 'react-dom/client';

export default function SwitchTheme (){
    const [initialText, setInitialText] = useState(true)

    useEffect(()=>{getLocalTheme()},[])

    useEffect(()=>{saveLocalTheme()},)

    

    function switchMode() {

        if (initialText) {
            document.documentElement.setAttribute('data-theme', 'dark')
            setInitialText(!initialText)
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            setInitialText(!initialText)
        }
      }

      function saveLocalTheme(){
        if(initialText){
        localStorage.setItem('theme','light')
      }else{
        localStorage.setItem('theme', "dark")
      }
    }

      function getLocalTheme(){
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

        if(currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if(currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', currentTheme);
                setInitialText(!initialText)
            }
        }
    }  

    return (
        <div className="theme">
            <button class="btn-mode" onClick={switchMode}>{initialText?"Dark Mode":"Light Mode"}</button>
        </div>
    )
}