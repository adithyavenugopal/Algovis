import React, {useState, useEffect} from "react";
import "../uxcomponents/uxstyles.css";
import {Slider} from "../uxcomponents/slider/slider.jsx"


var simGap = 1000;
var array = [];
var displayVal = true;

const max_height = 400;
const colors = {
    normal_bar : "#263238",
    selected_bar : "#EF6C00",
    wrong_order_bar : "#B71C1C",
    correct_bar : "#43A047",
    final_bar : "#01579B"
}


export default function Sort(props){

    const [isEnabled,setIsEnabled] = useState(true);
    const [reset,setReset] = useState(true);
    const [simSpeed,setSimSpeed] = useState(1);
    const [simComps,setSimComps] = useState(10);
    const [arrayList,setArrayList] = useState([]);
    const [trace,setTrace] = useState([]);

    useEffect(() => {
        if(isEnabled)console.log("Sim not running!");
        else console.log("sim running!");
    },[isEnabled])

    useEffect(() => {
        switch(simSpeed){
            case "1":
            default:
                simGap = 1000;
                break;
            case "2":
                simGap = 500;
                break;
            case "3":
                simGap = 100;
                break;
            case "4":
                simGap = 10;
                break;
            case "5":
                simGap = 1;
                break;                
        }
    },[simSpeed]);

    useEffect(() =>{
        //Find a better implementation to clear all timeouts:
        var killtimer = setTimeout(()=>{
            for(let i = killtimer; i > 0; i--) clearTimeout(i);
            console.log("timerid " + killtimer);
            setIsEnabled(true);
            const temp_array = [];
            for(let i = 0;i<simComps;i++){
                temp_array.push(Math.floor((Math.random() * max_height)+1));
            }
            array = temp_array;
            if(simComps >= 40){
                displayVal = false;
            }
            else{
                displayVal = true;
            }
            setArrayList(array.map((value,idx) => 
            <div className = "arrayComponent" key = {idx} style = {{height: value/4+"%", width: (100/array.length)+"%"}}>{displayVal ? value : ""}</div>));
            cleanup();
        },10);
        //-----------------------------------------------------//

    },[props])


    useEffect(() => {

        setIsEnabled(true);
        const temp_array = [];
        for(let i = 0;i<simComps;i++){
            temp_array.push(Math.floor((Math.random() * max_height)+1));
        }
        array = temp_array;
        if(simComps >= 40){
            displayVal = false;
        }
        else{
            displayVal = true;
        }
        setArrayList(array.map((value,idx) => 
        <div className = "arrayComponent" key = {idx} style = {{height: value/4+"%", width: (100/array.length)+"%"}}>{displayVal ? value : ""}</div>));
        cleanup();
    },[simComps,reset]);


    useEffect(() => {
        props.animations(trace, simGap, displayVal, max_height, colors);
        setTimeout(()=>{
            setIsEnabled(true);
        },(trace.length+1)*simGap);
    },[trace]);

    const cleanup = () => {
        const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
        for(let i = 0;i< arrayComponent_divs.length;i++){
            arrayComponent_divs[i].style.backgroundColor = colors.normal_bar;
        }
    }

    const doSort = (array) => {
        if(!isEnabled)return;
        setIsEnabled(false);
        cleanup();
        const temp_trace = props.sortingalgorithm(array);
        setTrace(temp_trace);
    };


    return(
        <div className = "appContainer">
            <div className = "appScreenContainer">
                <div className = "appScreen">
                    {arrayList}
                </div>
            </div>
            <div className = "appMenuContainer">
                <div className = "appMenuTextBox" id = "config">
                <div className = "tag">Config</div>
                    <p>Speed:</p>
                    <Slider 
                    onChange = {(val)=>{setSimSpeed(val)}}
                    isEnabled = {isEnabled}
                    min = "1"
                    max = "5"
                    step = "1"
                    default = "1"
                    />
                    <p>Number of Components:</p>
                    <Slider 
                    onChange = {(val)=>{setSimComps(val)}}
                    isEnabled = {isEnabled}
                    min = "10"
                    max = "150"
                    step = "10"
                    default = "10"
                    />
                </div>
                <div className = "appMenuBarContainer">
                    <div className = "appMenuBar">
                        <div className = "appMenuBarItem" onClick = {isEnabled ? () => {doSort(array)}: console.log("disabled!")}>
                            Start
                        </div>
                        <div className = "appMenuBarItem" onClick = {isEnabled ? () => {setReset(!reset)}: console.log("disabled")}>
                            Reset
                        </div>
                    </div>
                </div>
                <div className = "appMenuTextBox" id = "info">
                    <div className = "tag">
                        Info.
                    </div>
                    <p>test</p>
                </div>
                

            </div>
        </div>

    );
}