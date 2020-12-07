import "../../uxcomponents/uxstyles.css";


export function animations(trace, simGap, displayVal, max_height, colors){
    const arrayComponent_divs = document.getElementsByClassName("arrayComponent");
    for(let i =0; i< trace.length ; i++){
        const [comp1,comp2,tr_case] = trace[i];
        if(tr_case === 1){
        setTimeout(()=>{
            for(let i = comp1; i<=comp2;i++){
                arrayComponent_divs[i].style.backgroundColor = colors.correct_bar;
            }
        },i*simGap)
        }
        if(tr_case === 2){
            setTimeout(()=>{
                for(let i = comp1; i<=comp2;i++){
                    arrayComponent_divs[i].style.backgroundColor = colors.wrong_order_bar;
                }
            },i*simGap)
        }
        if(tr_case === 3){
            setTimeout(()=>{
                arrayComponent_divs[comp1].style.backgroundColor = colors.final_bar;
                arrayComponent_divs[comp1].style.height = comp2*100/max_height+"%";
                if(displayVal){
                    arrayComponent_divs[comp1].innerHTML = comp2;
                }
            },i*simGap)
        }
    }
}

export function mergesortalgorithm(array){
    const temp_trace = [];
    const merge = (array, leftStart, mid, rightEnd) => {
        let left = [];
        let right = [];

        for(let i = 0;i < mid - leftStart + 1; i++){
            left.push(array[leftStart+i]);
        }
        temp_trace.push([leftStart,mid,1]);
        temp_trace.push([mid+1,rightEnd,2]);

        for(let j = 0;j < rightEnd - mid; j++){
            right.push(array[mid+1+j]);
        }


        let i = 0;
        let j = 0;
        let k = leftStart;

        while((i < mid - leftStart + 1) && (j < rightEnd - mid)){
            if(left[i] <= right[j]){
                array[k] = left[i];
                temp_trace.push([k,array[k],3]);
                i++
            }
            else{
                array[k] = right[j];
                j++;
                temp_trace.push([k,array[k],3]);
            }
            k++;
        }

        while(j < rightEnd - mid){
            array[k] = right[j];
            temp_trace.push([k,array[k],3]);
            j++;
            k++;
        }

        while(i < mid - leftStart + 1){
            array[k] = left[i];
            temp_trace.push([k,array[k],3]);
            i++;
            k++;
        }
    }
    const mergeSort = (array,left,right) => {
        if(left >= right){
            return;
        }
        let mid = Math.floor((left+right) / 2);
        mergeSort(array,left,mid);
        mergeSort(array,mid+1,right);
        merge(array,left,mid,right);
    }
    mergeSort(array,0,array.length-1);
    return temp_trace;
}

