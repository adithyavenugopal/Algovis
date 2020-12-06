import React, {Component, useState, useEffect} from "react";
import "../../uxcomponents/uxstyles.css";
import {Slider} from "../../uxcomponents/slider/slider.jsx"


const max_height = 400;

export default function MergeSort(props){

    const [isEnabled,setIsEnabled] = useState(true);
    const [displayVal,setDisplayVal] = useState(true);
    const [simSpeed,setSimSpeed] = useState(1);
    const [simComps,setSimComps] = useState(10);
    const [array, setArray] = useState([]);
    const [arrayList,setArrayList] = useState([]);
    const [trace,setTrace] = useState([]);
    
    useEffect(() => {
        if(isEnabled)console.log("Sim running!");
        else console.log("sim Not running!");
    },[isEnabled])

    useEffect(() => {
        console.log(simComps);
        const temp_array = [];
        console.log(temp_array);
        for(let i = 0;i<simComps;i++){
            temp_array.push(Math.floor((Math.random() * max_height)+1));
        }
        console.log(temp_array.length);
        setArray(temp_array);
        if(simComps >= 40){
            setDisplayVal(false);
        }
        else{
            setDisplayVal(true);
        }
    },[simComps]);



    useEffect(() => {
        setArrayList(array.map((value,idx) => 
        <div className = "arrayComponent" key = {idx} style = {{height: value/4+"%", width: (100/array.length)+"%"}}>{displayVal ? value : ""}</div>));
    },[array,displayVal]);

    useEffect(() => {
        const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
        for(let i =0; i< trace.length ; i++){
            const [comp1,comp2,tr_case] = trace[i];
            if(tr_case === 1){
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = "yellow";
            },i*10)
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = "#263238";
            },(i+1)*10)
            }
            if(tr_case === 3){
                const [newheight1,newheight2,tr_case] = trace[i+1];
                setTimeout(() => {
                    arrayComponent_divs[comp1].style.backgroundColor = "green";
                    arrayComponent_divs[comp2].style.backgroundColor = "green";
                },i*10)

                setTimeout(() => {
                    arrayComponent_divs[comp1].style.height = newheight1/4+"%";
                    arrayComponent_divs[comp2].style.height = newheight2/4+"%";
                },(i+1)*10)

                setTimeout(() => {
                    arrayComponent_divs[comp1].style.backgroundColor = "#263238";
                    arrayComponent_divs[comp2].style.backgroundColor = "green";
                },(i+2)*10)
                i = i+1;
            }
        }
    },[trace]);

    const doMergeSort = (array) => {
        if(!isEnabled) return;
        setIsEnabled(false);
        const temp_trace = [];
        for(let i = 0; i< array.length-1; i++){
            let min_idx = i;
            temp_trace.push([i,i,1]);
            for(let j = i+1;j<array.length;j++){
                if(array[min_idx] > array[j]){
                    min_idx = j;
                }
            temp_trace.push([j,j,1]);
            }
            temp_trace.push([min_idx,min_idx,2]);
            let temp = array[min_idx];
            array[min_idx] = array[i];
            array[i] = temp;
            temp_trace.push([min_idx,i,3]);
            temp_trace.push([array[min_idx],array[i],4]);
        }
        console.log(temp_trace.length)
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
                    />
                    <p>Number of Components:</p>
                    <Slider 
                    onChange = {(val)=>{setSimComps(val)}}
                    isEnabled = {isEnabled}
                    min = "10"
                    max = "100"
                    step = "10"
                    />
                </div>
                <div className = "appMenuBarContainer">
                    <div className = "appMenuBar">
                        <div className = "appMenuBarItem" onClick = {() => {doMergeSort(array)}}>
                            Start
                        </div>
                    </div>
                </div>
                <div className = "appMenuTextBox">
                    <p>test</p>
                </div>
                

            </div>
        </div>

    );
}