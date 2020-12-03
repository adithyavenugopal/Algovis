import React, {useState,useEffect} from "react";
import "./slider.css"

export function Slider(props){

    const [sliderVal,setsliderVal] = useState(1);
    const [mouseState,setmouseState] = useState(null);

    const handleChange = (event) => {
        setsliderVal(event.target.value);
    };


    useEffect(()=>{
        if(mouseState === "up"){
            props.onChange(sliderVal);
        }
    });

    return(
        <div className = "slidercontainer">
        <input 
            type="range" 
            min = "1"
            max = "5"
            step = "1"
            value = {sliderVal}
            onChange = {props.isEnabled? handleChange : () => {console.log("disabled")}}
            onMouseDown={() => setmouseState("down")}
            onMouseUp={() => setmouseState("up")}
        />
        </div>
    );
}