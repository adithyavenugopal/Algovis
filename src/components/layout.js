import React from "react";
import BubbleSort from './BubbleSort';
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
                    <div class = "leftbarItem" onClick = {() => this.setState({app : "BubbleSort"})}><h4>BUBBLE SORT</h4></div>
                    <div class = "leftbarItem" onClick = {() => this.setState({app : "BFS"})}><h4>BFS</h4></div>
                    <div class = "leftbarItem" ><h4>MERGE SORT</h4></div>
                    <div class = "leftbarItem" ><h4>QUICK SORT</h4></div>
                    <div class = "leftbarItem" ><h4>COUNT SORT</h4></div>
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