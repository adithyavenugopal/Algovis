import "../../uxcomponents/uxstyles.css";

export function bubblesortanim(trace, simGap, displayVal, max_height, colors){
    let timerarray = [];
    const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
    for(let i =0; i< trace.length ; i++){
        const [comp1,comp2,tr_case] = trace[i];
        if(tr_case === 1){
        setTimeout(() => {
            arrayComponent_divs[comp1].style.backgroundColor = colors.selected_bar;
            arrayComponent_divs[comp2].style.backgroundColor = colors.selected_bar;
        },i*simGap)
        setTimeout(() => {
            arrayComponent_divs[comp1].style.backgroundColor = colors.normal_bar;
            arrayComponent_divs[comp2].style.backgroundColor = colors.normal_bar;
            console.log((i+1)*simGap);
        },(i+1)*simGap)
        }
        if(tr_case === 2){
            const [newheight1,newheight2] = trace[i+1];
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = colors.wrong_order_bar;
                arrayComponent_divs[comp2].style.backgroundColor = colors.wrong_order_bar;
            },i*simGap);

            setTimeout(() => {
                arrayComponent_divs[comp1].style.height = newheight1*100/max_height+"%";
                arrayComponent_divs[comp2].style.height = newheight2*100/max_height+"%";
                if(displayVal){
                    arrayComponent_divs[comp1].innerHTML = newheight1;
                    arrayComponent_divs[comp2].innerHTML = newheight2;
                };
            },(i+1)*simGap);
            i = i+1;
        }
        if(tr_case === 3){
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = colors.correct_bar;
                arrayComponent_divs[comp2].style.backgroundColor = colors.correct_bar;
            },i*simGap);
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = colors.normal_bar;
                arrayComponent_divs[comp2].style.backgroundColor = colors.normal_bar;
            },(i+1)*simGap);
        }
        if(tr_case === 4){
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = colors.final_bar;
                arrayComponent_divs[comp2].style.backgroundColor = colors.final_bar;
            },i*simGap);
        }
    }
    return timerarray;
}

export function bubblesortalgorithm(array){
    const temp_trace = [];
    for(let i = 0; i< array.length; i++){
        for(let j = 0;j<array.length-i-1;j++){
            temp_trace.push([j,j+1,1]);
            if(array[j] > array[j+1]){
                const temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                temp_trace.push([j,j+1,2]);
                temp_trace.push([array[j],array[j+1],2]);
                temp_trace.push([j,j+1,3]);             
            }
        }
        temp_trace.push([array.length-i-1,array.length-i-1,4]);
    }
    console.log(temp_trace.length);
    return temp_trace;
}