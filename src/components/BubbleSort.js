import React from "react";
import "./bubblesort.css";
import {Slider} from "./uxcomponents/slider/slider.jsx";

var speed = 250;
var number_of_elements = 20;
const color_finish = '#546E7A';
const color_init = '#263238';
const color_select = '#78909C';


export default class BubbleSort extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
            sim_type: 1,
            isEnabled: true
        };
    }

    componentDidMount(){
        this.init_array();
    }

    init_array(){
        this.init_sim_prop(this.state.sim_type);
        console.log(this.state.sim_type);
        console.log(speed)
        const array = [];
        for(let i = 0;i<number_of_elements;i++){
            array.push(Math.floor((Math.random() * 700)+1));
        }
        this.setState({array: array},function () {console.log(this.state.array)});
    }

    init_sim_prop(sim_type){
        console.log(sim_type);
        switch(+sim_type){
            case 1:
                speed = 1000;
                number_of_elements = 10;
                break;
            case 2:
                speed = 500;
                number_of_elements = 20;
                break;
            case 3:
                speed = 100;
                number_of_elements = 40;
                console.log(speed);
                break;
            case 4:
                speed = 10;
                number_of_elements = 80;
                console.log(speed);
                break;
            case 5:
                speed = 1;
                number_of_elements = 120;
                console.log(speed);
                break;
            default:
                break;
        }
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
                        this.setState({isEnabled: true}, () => {console.log("Finished!")});
                    }
                    return;
                }
                arrayComponent_divs[comp1].style.backgroundColor = color_init;
                if(i === arrayComponentColors.length-2){
                    arrayComponent_divs[comp1].style.backgroundColor = color_finish;
                    this.setState({isEnabled: true}, () => {console.log("Finished!")});
                }
                arrayComponent_divs[comp1].style.height = newheight1+"px";
                arrayComponent_divs[comp2].style.background = color_finish;
                arrayComponent_divs[comp2].style.height = newheight2+"px";
                if(this.state.sim_type === 1){
                arrayComponent_divs[comp1].innerHTML = newheight1;
                arrayComponent_divs[comp2].innerHTML = newheight2;
                }
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

    set_sim(type){
        if(this.state.sim_type === type){
            console.log(this.state.sim_type + " no change " + type );
            return;
        }
        else{
            this.setState({sim_type: type},function () {
                console.log(this.state.sim_type + " change " + type );
                this.reset_array();
            });

        }
    }

    render(){
        const array = this.state.array;
        const arrayList = array.map((value,idx) => 
            <div className = "arrayComponent" key = {idx} style = {{height: value+"px",width: (100/array.length)+"%"}}>{this.state.sim_type === 1 ? value : ""}</div>
        );
        return(
            <div className = "appContainer">

                <div className = "displayAppContainer">
                    <div className = "arrayContainer">
                    {arrayList}
                    </div>
                </div>

            <div className = "displayMenu">
                <div className = "displayMenuTextBox" id = "config">
                    <div className = "configtag">Config</div>
                    <p>Speed:</p>
                    <Slider 
                    onChange = {(val)=>{this.set_sim(val)}}
                    isEnabled = {this.state.isEnabled}
                />
                </div>


                <div className = "displayMenuBarContainer">
                    <div className = "displayMenuBar">
                        <div className = "displayMenuItem" onClick = {() => {
                            this.setState({isEnabled: false},() => {
                                console.log("Running...");
                                this.bubbleSort(this.state.array);
                                var divs = document.getElementsByClassName("arrayComponent");
                                for(let i = 0;i<divs.length;i++){
                                    divs[i].style.background = color_init;
                                }
                            });
                            }}>Start</div>
                        <div className = "displayMenuItem" onClick = {() => {this.reset_array()}}>Reset</div>
                    </div>
                </div>
                <div className = "displayMenuTextBox">
                    <div className = "logtag">Info.</div>
                    <p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.</p>

                </div>
            </div>
            </div>
        );
    }
}