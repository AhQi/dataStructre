function mergeArr(arr, head, mid, tail){
    if(head >= tail){
        console.log(head+tail);
        return;
    }

    var tmpArr = [];
    var lArrIdx = head;
    var rArrIdx = mid+1;
    var i;

    for(i = 0; i < tail - head + 1; i++){
        if(lArrIdx <= mid && rArrIdx <= tail){
            if(arr[lArrIdx] < arr[rArrIdx]){
                tmpArr[i] = arr[lArrIdx];
                lArrIdx++;
            }else{
                tmpArr[i] = arr[rArrIdx];
                rArrIdx++;
            }
        }else{
            if(lArrIdx > mid){
                if(rArrIdx <= tail){
                    tmpArr[i] = arr[rArrIdx];
                    rArrIdx++;
                }
            }

            if(rArrIdx > tail){
                if(lArrIdx <= mid){
                    tmpArr[i] = arr[lArrIdx];
                    lArrIdx++;
                }
            }
        }

    }

    for(i =0 ; i<tmpArr.length; i++){
        arr[head] = tmpArr[i];
        head++;
    }


}

function mergeSort(arr, head, tail){
    if(head < tail){

        var mid = Math.floor((head+tail)/2);

        mergeSort(arr, head, mid);

        mergeSort(arr, mid+1, tail);

        mergeArr(arr, head, mid, tail);

    }

}
var arr = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5, 11];
mergeSort(arr, 0, arr.length-1);
console.log(arr);