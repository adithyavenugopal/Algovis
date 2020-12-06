import React, {Component, useState, useEffect} from "react";
import "../../uxcomponents/uxstyles.css";
import {Slider} from "../../uxcomponents/slider/slider.jsx"
import "./bubblesort.css"

const max_height = 400;
var simGap = 1000;
const normal_bar = "#263238";
const selected_bar = "#37474F";
const wrong_order_bar = "#B71C1C";
const correct_bar = "#43A047";
const final_bar = "#01579B";

export default function BubbleSort(props){

    const [isEnabled,setIsEnabled] = useState(true);
    const [displayVal,setDisplayVal] = useState(true);
    const [reset,setReset] = useState(true);
    const [simSpeed,setSimSpeed] = useState(1);
    const [simComps,setSimComps] = useState(10);
    const [array, setArray] = useState([]);
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
        console.log(simGap);
    },[simSpeed]);


    useEffect(() => {
        console.log(simComps);
        const temp_array = [];
        for(let i = 0;i<simComps;i++){
            temp_array.push(Math.floor((Math.random() * max_height)+1));
        }
        setArray(temp_array);
        if(simComps >= 40){
            setDisplayVal(false);
        }
        else{
            setDisplayVal(true);
        }
    },[simComps,reset]);



    useEffect(() => {
        setArrayList(array.map((value,idx) => 
        <div className = "arrayComponent" key = {idx} style = {{height: value/4+"%", width: (100/array.length)+"%"}}>{displayVal ? value : ""}</div>));
        const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
        cleanup();
    },[array,displayVal]);


    useEffect(() => {
        const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
        let prev_min = -1;
        for(let i =0; i< trace.length ; i++){
            const [comp1,comp2,tr_case] = trace[i];
            if(tr_case === 1){
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = selected_bar;
                arrayComponent_divs[comp2].style.backgroundColor = selected_bar;
            },i*simGap)
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = normal_bar;
                arrayComponent_divs[comp2].style.backgroundColor = normal_bar;
                console.log((i+1)*simGap);
            },(i+1)*simGap)
            }
            if(tr_case === 2){
                const [newheight1,newheight2] = trace[i+1];
                setTimeout(() => {
                    arrayComponent_divs[comp1].style.backgroundColor = wrong_order_bar;
                    arrayComponent_divs[comp2].style.backgroundColor = wrong_order_bar;
                },i*simGap);

                setTimeout(() => {
                    arrayComponent_divs[comp1].style.height = newheight1*100/max_height+"%";
                    arrayComponent_divs[comp2].style.height = newheight2*100/max_height+"%";
                    if(displayVal){
                        arrayComponent_divs[comp1].innerHTML = newheight1;
                        arrayComponent_divs[comp2].innerHTML = newheight2;
                    };
                },(i+1)*simGap);
                i = i+1;
            }
            if(tr_case === 3){
                setTimeout(() => {
                    arrayComponent_divs[comp1].style.backgroundColor = correct_bar;
                    arrayComponent_divs[comp2].style.backgroundColor = correct_bar;
                },i*simGap);
                setTimeout(() => {
                    arrayComponent_divs[comp1].style.backgroundColor = normal_bar;
                    arrayComponent_divs[comp2].style.backgroundColor = normal_bar;
                },(i+1)*simGap);
            }
            if(tr_case === 4){
                setTimeout(() => {
                    arrayComponent_divs[comp1].style.backgroundColor = final_bar;
                    arrayComponent_divs[comp2].style.backgroundColor = final_bar;
                },i*simGap);
            }
        }
        setTimeout(()=>{
            setIsEnabled(true);
        },(trace.length+1)*simGap);
    },[trace]);

    const cleanup = () => {
        const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
        for(let i = 0;i< arrayComponent_divs.length;i++){
            arrayComponent_divs[i].style.backgroundColor = "#263238";
        }
    }
    const doBubbleSort = (array) => {
        cleanup();
        if(!isEnabled)return;
        setIsEnabled(false);
        const temp_trace = [];
        for(let i = 0; i< array.length; i++){
            for(let j = 0;j<array.length-i-1;j++){
                temp_trace.push([j,j+1,1]);
                if(array[j] > array[j+1]){
                    const temp = array[j+1];
                    array[j+1] = array[j];
                    array[j] = temp;
                    temp_trace.push([j,j+1,2]);
                    temp_trace.push([array[j],array[j+1],2]);
                    temp_trace.push([j,j+1,3]);             
                }
            }
            temp_trace.push([array.length-i-1,array.length-i-1,4]);
        }
        console.log(temp_trace.length);
        setTrace(temp_trace);
    };


    return(
        <div className = "appContainer">
            <div className = "appScreenContainer">
                <div className = "appScreen">
                    {arrayList};
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
                    max = "100"
                    step = "10"
                    default = "10"
                    />
                </div>
                <div className = "appMenuBarContainer">
                    <div className = "appMenuBar">
                        <div className = "appMenuBarItem" onClick = {isEnabled ? () => {doBubbleSort(array)}: console.log("disabled!")}>
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