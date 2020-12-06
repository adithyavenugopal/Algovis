import React from "react";
import BubbleSort from './Algorithms/BubbleSort/bubblesort.jsx';
import MergeSort from './Algorithms/Mergesort/mergesort.jsx';
import SelectionSort from './Algorithms/SelectionSort/selectionsort.jsx'
import BFS from "./BFS";
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
                return (<BubbleSort />);
            case "MergeSort":
                return (<MergeSort />);
            case "SelectionSort":
                return (<SelectionSort />);
            case "BFS":
                return (<BFS />);
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

                    <div className = "leftbarItem" >PlaceHolder</div>
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