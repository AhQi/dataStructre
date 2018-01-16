var print = console.log;

function Queue() {
    this.dataStore = [];
    this.enQueue = enQueue;
    this.deQueue = deQueue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.enDblQueue = enDblQueue;
    this.deDblQueue = deDblQueue;
    this.length = function(){
        return this.dataStore.length;
    };
}

function enDblQueue(val){
    this.dataStore.unshift(val);
}

function deDblQueue(){
    return this.dataStore.pop();
}

function enQueue(val){
    this.dataStore.push(val);
}

function deQueue(){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length - 1];
}


function toString(separator){
    return this.dataStore.join(separator);
}

function empty(){
    return (this.dataStore.length === 0);
}

function palindromeTest(str){
    var tmp = new Queue();

    for(var i = 0 ; i < str.length; i++){
        tmp.enQueue(str[i]);
    }


    while(tmp.length() > 1){

        var a = tmp.deQueue();
        var b = tmp.deDblQueue();
        if(a === b ){

        }else{
            return false;
        }
    }

    return true;
}

print(palindromeTest('rafcar'));