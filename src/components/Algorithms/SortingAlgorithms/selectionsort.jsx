import "../../uxcomponents/uxstyles.css";



export function selectionsortanim(trace, simGap, displayVal, max_height, colors){
    const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
    let prev_min = -1;
    for(let i =0; i< trace.length ; i++){
        const [comp1,comp2,tr_case] = trace[i];
        if(tr_case === 1){
        setTimeout(() => {
            arrayComponent_divs[comp1].style.backgroundColor = colors.selected_bar;
        },i*simGap);
        setTimeout(() => {
            arrayComponent_divs[comp1].style.backgroundColor = colors.normal_bar;
            console.log((i+1)*simGap);
        },(i+1)*simGap);
        }
        if(tr_case === 2){
        setTimeout(()=>{
            if(comp2 !== -1){
                arrayComponent_divs[prev_min].style.backgroundColor = colors.normal_bar;
            }
        prev_min = comp1;
        arrayComponent_divs[comp1].style.backgroundColor = colors.correct_bar;
        },(i)*simGap);
        }

        if(tr_case === 3){
            setTimeout(()=>{
                arrayComponent_divs[comp1].style.backgroundColor = colors.final_bar;
            },i*simGap);
        }

        if(tr_case === 4){
            const [newheight1,newheight2] = trace[i+1];
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = colors.final_bar;
                arrayComponent_divs[comp2].style.backgroundColor = colors.final_bar;
            },i*simGap);

            setTimeout(() => {
                arrayComponent_divs[comp1].style.height = newheight1*100/max_height+"%";
                arrayComponent_divs[comp2].style.height = newheight2*100/max_height+"%";
                if(displayVal){
                arrayComponent_divs[comp1].innerHTML = newheight1;
                arrayComponent_divs[comp2].innerHTML = newheight2;
                };
            },(i+1)*simGap);
            if(comp1 !== comp2){
            setTimeout(() => {
                arrayComponent_divs[comp1].style.backgroundColor = colors.normal_bar;
                arrayComponent_divs[comp2].style.backgroundColor = colors.final_bar;
            },(i+2)*simGap);
            }
            prev_min = -1;
            i = i+1;
        }
    }
}

export function selectionsortalgorithm(array){
    const temp_trace = [];
    for(let i = 0; i< array.length-1; i++){
        let min_idx = i;
        temp_trace.push([i,i,1]);
        temp_trace.push([min_idx,-1,2]);
        for(let j = i+1;j<array.length;j++){
            temp_trace.push([j,j,1]);
            if(array[min_idx] > array[j]){
                min_idx = j;
                temp_trace.push([min_idx,min_idx,2]);               
            }
        }
        let temp = array[min_idx];
        array[min_idx] = array[i];
        array[i] = temp;
        temp_trace.push([min_idx,i,4]);
        temp_trace.push([array[min_idx],array[i],4]);
    }
    temp_trace.push([array.length-1,array.length-1,3]);
    return temp_trace;
}