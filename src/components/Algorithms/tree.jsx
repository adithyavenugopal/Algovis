import React, {useState, useEffect} from "react";
import "../uxcomponents/uxstyles.css";
import {Slider} from "../uxcomponents/slider/slider.jsx"


var simGap = 1000;
var array = [];
var displayVal = true;

var tree = [1,2,3];

const max_height = 400;
const colors = {
    normal_bar : "#263238",
    selected_bar : "#EF6C00",
    wrong_order_bar : "#B71C1C",
    correct_bar : "#43A047",
    final_bar : "#01579B"
}


export default function Tree(props){

    const [isEnabled,setIsEnabled] = useState(true);
    const [reset,setReset] = useState(true);
    const [simSpeed,setSimSpeed] = useState(1);
    const [nodeLevels,setNodeLevels] = useState(1);
    const [trace,setTrace] = useState([]);
    const [treeNodes,setTreeNodes] = useState([]);

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

    useEffect(() => {
        tree = [];
        console.log(nodeLevels);
        let nodes_at_level = 1;
        const temp_nodes = [];
        for(let i = 1; i <= nodeLevels;i++){
            let j = 0;
            let current_nodes = nodes_at_level;
            while(j < current_nodes){
                tree.push(i);
                temp_nodes.push(
                    <div className = "treeNode">{i}</div>
                );
                nodes_at_level++;
                j++;
            };
        }
        setTreeNodes(temp_nodes);
    },[nodeLevels]);

    useEffect(() =>{
        //Find a better implementation to clear all timeouts:
        var killtimer = setTimeout(()=>{
            for(let i = killtimer; i > 0; i--) clearTimeout(i);
            console.log("timerid " + killtimer);
            setIsEnabled(true);
        },10);
        //-----------------------------------------------------//
    },[props])

    return(
        <div className = "appContainer">
            <div className = "appScreenContainer">
                <div className = "appScreen">
                    {treeNodes}
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
                    onChange = {(val)=>{setNodeLevels(val)}}
                    isEnabled = {isEnabled}
                    min = "1"
                    max = "5"
                    step = "1"
                    default = "1"
                    />
                </div>
                <div className = "appMenuBarContainer">
                    <div className = "appMenuBar">
                        <div className = "appMenuBarItem" onClick = {isEnabled ? () => {}: console.log("disabled!")}>
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