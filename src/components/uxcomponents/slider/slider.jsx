import React, {useState,useEffect} from "react";
import "./slider.css"

export function Slider(props){

    const [sliderVal,setsliderVal] = useState(props.default);
    const [mouseState,setmouseState] = useState(null);

    const handleChange = (event) => {
        setsliderVal(event.target.value);
    };


    useEffect(()=>{
        if(props.isEnabled){
        if(mouseState === "up"){
            props.onChange(sliderVal);
        }
    }
        else{
            console.log("Disabled!");
        }
    });

    return(
        <div className = "slidercontainer">
        <input 
            type="range" 
            min = {props.min}
            max = {props.max}
            step = {props.step}
            value = {sliderVal}
            onChange = {props.isEnabled? handleChange : () => {console.log("disabled")}}
            onMouseDown={() => setmouseState("down")}
            onMouseUp={() => setmouseState("up")}
        />
        </div>
    );
}