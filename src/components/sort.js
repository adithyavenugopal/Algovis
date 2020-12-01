import React from "react";
import "./sort.css";


const speed = 1;
const number_of_elements = 50;

export default class Sort extends React.Component {
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
                arrayComponent_divs[comp1].style.backgroundColor = 'blue';
                arrayComponent_divs[comp2].style.backgroundColor = 'blue';
            },i*speed);
            setTimeout(() => {
                if(arrayComponent_divs[comp1].style.height === newheight1+"px"){
                    console.log("no swap");
                    arrayComponent_divs[comp1].style.backgroundColor = 'red';
                    arrayComponent_divs[comp2].style.background = 'yellow';
                    if(i === arrayComponentColors.length-2){
                        arrayComponent_divs[comp1].style.backgroundColor = 'yellow';
                    }
                    return;
                }
                arrayComponent_divs[comp1].style.backgroundColor = 'red';
                if(i === arrayComponentColors.length-2){
                    arrayComponent_divs[comp1].style.backgroundColor = 'yellow';
                }
                arrayComponent_divs[comp1].style.height = newheight1+"px";
                arrayComponent_divs[comp2].style.background = 'yellow';
                arrayComponent_divs[comp2].style.height = newheight2+"px";
            },(i+1)*speed);
        }
    }

    reset_array(){
        var divs = document.getElementsByClassName("arrayComponent");
        for(let i = 0;i<divs.length;i++){
            divs[i].style.background = "red";
        }
        this.init_array();
    }

    render(){
        const {array} = this.state;
        const arrayList = array.map((value,idx) => 
            <div className = "arrayComponent" key = {idx} style = {{height: value+"px", width: (100/array.length)+"%"}}></div>
        );
        return(
            <div className = "arrayContainer">
            {arrayList}
            <button onClick = {() => this.bubbleSort(this.state.array)}> Bubble Sort </button>
            <button onClick = {() => this.reset_array()}> Reset Array</button>
            </div>
        );
    }
}