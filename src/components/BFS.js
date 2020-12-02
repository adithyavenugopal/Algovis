import React from "react";
import "./BFS.css";
import "./bubblesort.css";


const color_finish = '#ffbd69';
const color_init = '#ee4540';
const color_select = '#fcdab7';

const ROW = 25;
const COL = 25;

export default class BFS extends React.Component{




    render(){
        const items = [];
        for(let i = 0;i<ROW*COL;i++){
            items.push(
            <div className = "nodeBox" style={{background: color_init}}>
                1
            </div>
            )
        }
        return(
            <div className = "appContainer">
                <div className = "mainDisplay">
                    {items}
                </div>
                <div className = "displayMenu">
                    test
                </div>
            </div>
        )
    }

}