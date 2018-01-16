function quickSort1(arr) {
    // Complete this function
    if(arr.length === 0 ){
        return [];
    }

    var pivot = arr[0];
    var left = [];
    var right = [];

    for(var i = 1; i < arr.length; i++){
        if(pivot > arr[i]){

            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }

    }

    return quickSort1(left).concat(pivot, quickSort1(right));
}
function swap(arr, num1, num2){

    if(num1 !== num2){
        var tmp = arr[num1];
        arr[num1] = arr[num2];
        arr[num2] = tmp;
    }

};

function quickSort2(arr, head, tail) {
    if(head >= tail){
        return;
    }
    // Complete this function
    var lastIdxOfSmaller = head -1;
    var curIdx;
    var pivotIdx = tail;

    for(curIdx = head; curIdx < tail; curIdx++ ){
        if(arr[curIdx] < arr[pivotIdx]){
            lastIdxOfSmaller++;
            swap(arr, curIdx, lastIdxOfSmaller);
        }
    }
    lastIdxOfSmaller++;
    swap(arr, lastIdxOfSmaller, pivotIdx);

    quickSort2(arr, head, lastIdxOfSmaller - 1);
    quickSort2(arr, lastIdxOfSmaller+1, tail);

}
var arr = [9,3,93,9,65,94,50,90,12,65];

//console.log(quickSort1(arr));
quickSort2(arr, 0, arr.length -1)
console.log(arr);