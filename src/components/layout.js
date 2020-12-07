import React from "react";
import Sort from "./Algorithms/sort.jsx"
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
                return (
                    <div>
                        <h1> Please Select an Algorithm from the left sidebar</h1>
                    </div>);
            default:
                return (<></>);
        }
    }

    render(){
        return(
            <>
            <div className = "mainContainer">
                <div className = "topBar">
                    <h1>AlgoVis</h1>
                </div>
                <div className = "leftBar">
                    <div className = "leftbarItem" onClick = {() => this.setState({app : "BubbleSort"})}>Bubble Sort</div>
                    <div className = "leftbarItem" onClick = {() => this.setState({app : "SelectionSort"})}>Selection Sort</div>
                    <div className = "leftbarItem" onClick = {() => this.setState({app : "MergeSort"})}>Merge Sort</div>

                    <div className = "leftbarItem" onClick = {() => this.setState({app: "Test"})} >PlaceHolder</div>
                    <div className = "leftbarItem" >PlaceHolder</div>
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