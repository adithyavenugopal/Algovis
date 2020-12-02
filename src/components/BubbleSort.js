import React from "react";
import "./bubblesort.css";


const speed = 250;
const color_finish = '#ffbd69';
const color_init = '#ee4540';
const color_select = '#fcdab7';
const number_of_elements = 20;

export default class BubbleSort extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: []
        };
    }

    componentDidMount(){
        this.init_array();
    }

    init_array(){
        const array = [];
        for(let i = 0;i<number_of_elements;i++){
            array.push(Math.floor((Math.random() * 700)+1));
        }
        this.setState({array: array});
    }

    bubbleSort(array){
        const arrayComponentColors = [];
        const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
        for(let i =0;i<array.length;i++){
            for(let j = 0;j<array.length-i-1;j++){
                arrayComponentColors.push([j,j+1]);
                if(array[j] > array[j+1]){
                     const temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
                arrayComponentColors.push([array[j],array[j+1]]);
            }
        }
        console.log(arrayComponentColors.length);
        for(let i = 0;i<arrayComponentColors.length-1;i=i+2){
            const [comp1,comp2] = arrayComponentColors[i];
            const [newheight1, newheight2] = arrayComponentColors[i+1];
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = color_select;
                arrayComponent_divs[comp2].style.backgroundColor = color_select;
            },i*speed);
            setTimeout(() => {
                if(arrayComponent_divs[comp1].style.height === newheight1+"px"){
                    console.log("no swap");
                    arrayComponent_divs[comp1].style.backgroundColor = color_init;
                    arrayComponent_divs[comp2].style.background = color_finish;
                    if(i === arrayComponentColors.length-2){
                        arrayComponent_divs[comp1].style.backgroundColor = color_finish;
                    }
                    return;
                }
                arrayComponent_divs[comp1].style.backgroundColor = color_init;
                if(i === arrayComponentColors.length-2){
                    arrayComponent_divs[comp1].style.backgroundColor = color_finish;
                }
                arrayComponent_divs[comp1].style.height = newheight1+"px";
                arrayComponent_divs[comp2].style.background = color_finish;
                arrayComponent_divs[comp2].style.height = newheight2+"px";
            },(i+1)*speed);
        }
    }

    reset_array(){
        var divs = document.getElementsByClassName("arrayComponent");
        for(let i = 0;i<divs.length;i++){
            divs[i].style.background = color_init;
        }
        this.init_array();
    }

    render(){
        const {array} = this.state;
        const arrayList = array.map((value,idx) => 
            <div className = "arrayComponent" key = {idx} style = {{height: value+"px",width: (100/array.length)+"%"}}></div>
        );
        return(
            <div className = "appContainer">
            <div className = "arrayContainer">
                {arrayList}
            </div>
            <div className = "displayMenu">
                <div className = "displayMenuLog">
                    <div className = "logtag">Log</div>
                    <p>TO DO: Add log functionality</p>
                </div>
                <div className = "displayMenuItem" onClick = {() => this.bubbleSort(this.state.array)} >START</div>
                <div className = "displayMenuItem" onClick = {() => this.reset_array()}>RESET</div>
            </div>
            </div>
        );
    }
}