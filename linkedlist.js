var print = console.log;

function Node(val){
    this.val = val;
    this.next = null;
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
}

function find(item) {
    print('!'+this.head.val);
    var currNode = this.head;
    while (currNode.val != item) {
        currNode = currNode.next;
    }
    return currNode;
}


function insert(newVal, item){
    var insertNode = new Node(newVal);
    var curNode = this.find(item);


    insertNode.next = curNode.next;
    curNode.next = insertNode;
}

function display(){
    var curNode = this.head;

    while(curNode!== null){
        print(curNode.val);
        curNode = curNode.next;
    }
};

var cities = new LList();
print(cities.head);
cities.insert("Conway", "head");
print(2);
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()