import React from "react";
import Sort from "./Algorithms/sort.jsx"
import Tree from "./Algorithms/tree.jsx"
import {bubblesortanim, bubblesortalgorithm} from './Algorithms/SortingAlgorithms/bubblesort.jsx';
import {animations, mergesortalgorithm} from './Algorithms/SortingAlgorithms/mergesort.jsx';
import {selectionsortanim, selectionsortalgorithm} from './Algorithms/SortingAlgorithms/selectionsort.jsx'

import './layout.css';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            app: "None"
        };

    }

    displayed_app(){
        switch(this.state.app){
            case "None":
                return (
                <div>
                    <h1> Please Select an Algorithm from the left sidebar</h1>
                </div>);
            case "BubbleSort":
                return (<Sort animations = {bubblesortanim} sortingalgorithm = {bubblesortalgorithm} />);
            case "MergeSort":
                return (<Sort animations = {animations} sortingalgorithm = {mergesortalgorithm} />);
            case "SelectionSort":
                return (<Sort animations = {selectionsortanim} sortingalgorithm = {selectionsortalgorithm} />);
            case "Test":
                return (<></>);
            default:
                return (<></>);
        }
    }

    app_switch(){
        var killtimer = setTimeout(()=>{},10);
        for(let i = killtimer; i > 0; i--) clearTimeout(i);
        console.log("timerid " + killtimer);
    }



    render(){
        return(
            <>
            <div className = "mainContainer">
                <div className = "topBar">
                    <h1>AlgoVis</h1>
                </div>
                <div className = "leftBar">
                    <div className = "leftBarHeading">
                        <div className = "leftBarDropdown" id = "SortingAlgorithmDropdown" onClick = {() => {
                        const menuid = document.getElementById("SortingAlgorithms");
                        const dropdownid = document.getElementById("SortingAlgorithmDropdown");
                        if(menuid.style.display === "none"){
                            menuid.style.display = "block";
                            dropdownid.innerHTML = " - ";
                        }
                        else{
                            menuid.style.display = "none";
                            dropdownid.innerHTML = " + ";
                        }
                        }}>
                         + 
                        </div>
                        Sorting Algorithms:
                    </div>
                        <div className = "leftBarItemContainer" id = "SortingAlgorithms">
                        <div className = "leftbarItem" onClick = {() => {
                            this.app_switch();
                            setTimeout(() => {this.setState({app : "BubbleSort"})},100);
                        }}>Bubble Sort</div>
                        <div className = "leftbarItem" onClick = {() => {
                            this.app_switch();
                            setTimeout(() => {this.setState({app : "SelectionSort"})},100);
                        }}>Selection Sort</div>
                        <div className = "leftbarItem" onClick = {() => {
                            this.app_switch();
                            setTimeout(() => {this.setState({app : "MergeSort"})},100);
                        }}>Merge Sort</div>
                    </div>
                    <div className = "leftBarHeading">
                        <div className = "leftBarDropdown" id = "OtherDropdown" onClick = {() => {
                        const menuid = document.getElementById("Other");
                        const dropdownid = document.getElementById("OtherDropdown");
                        if(menuid.style.display === "none"){
                            menuid.style.display = "block";
                            dropdownid.innerHTML = " - ";
                        }
                        else{
                            menuid.style.display = "none";
                            dropdownid.innerHTML = " + ";
                        }
                        }}>
                         + 
                        </div>
                        Other:
                    </div>
                    <div className = "leftBarItemContainer" id = "Other">
                    <div className = "leftbarItem" onClick = {() => {
                            this.app_switch();
                            setTimeout(() => {this.setState({app : "Test"})},100);
                        }}>PlaceHolder</div>
                        <div className = "leftbarItem" >PlaceHolder</div>
                    </div>
                </div>
                <div className = "midBar">
                    {this.displayed_app()}
                </div>
                <div className = "rightBar">
                </div>
                <div className = "bottomBar">
                    
                </div>
            </div>
            </>

        )
    }
}