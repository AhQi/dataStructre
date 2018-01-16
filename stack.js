var print = console.log;

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(val){
    this.dataStore[this.top++] = val;
}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    return this.dataStore[this.top - 1];
}

function clear(){
    this.top = 0;
}

function length(){
    return this.top;
}

function baseConvert(decimal, base){
    var tmp = new Stack();
    var result = '';
    while(decimal !== 0){
        tmp.push(decimal % base);
        decimal = Math.floor(decimal/base);
    }

    while(tmp.length() !== 0){
        result += tmp.pop();
    }

    return result;
}

function palindromeTest(str){
    var tmp = new Stack();

    for(var i = 0 ; i < str.length; i++){
        tmp.push(str[i]);
    }
    i = 0;

    while(tmp.length() > 0){
        if(tmp.pop() === str[i++]){

        }else{
            return false;
        }
    }

    return true;
}
var num = 32;
var base = 2;
var newNum = baseConvert(num, base);
print(num + " converted to base " + base + " is " + newNum); num = 125;
base = 8;
var newNum = baseConvert(num, base);
print(num + " converted to base " + base + " is " + newNum);

print(palindromeTest('raceacar'));