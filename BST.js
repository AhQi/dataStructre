var print = console.log;

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.min = getMin;
    this.max = getMax;
    this.find = find;
    this.remove  = remove;
}

function insert(data){
    var insertNode = new Node(data, null, null);

    if(this.root === null){
        this.root = insertNode;
    }else{
        var curNode = this.root;

        while(1){
            if(curNode.data > insertNode.data){
                if(curNode.left !== null){
                    curNode = curNode.left;
                }else{
                    curNode.left = insertNode;
                    break;
                }
            }else{
                if(curNode.right !== null){
                    curNode = curNode.right;
                }else{
                    curNode.right = insertNode;
                    break;
                }
            }
        }
    }
}

function inOrder(node){
    if(node !== null){
        inOrder(node.left);
        print(node.show()+' ');
        inOrder(node.right);
    }
}

function preOrder(node){
    if(node !== null){
        print(node.show()+' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node){
    if(node !== null){

        postOrder(node.left);
        postOrder(node.right);
        print(node.show()+' ');
    }
}

function getMin(node){
    var curNode = node;

    while(curNode.left !== null){
        curNode = curNode.left;
    }

    return curNode.data;
}

function getMax(){
    var curNode = this.root;

    while(curNode.right !== null){
        curNode = curNode.right;
    }

    return curNode.data;
}

function find(data){
    var curNode = this.root;

    while(curNode.data != data){
        if(curNode.data < data){
            curNode = curNode.right;
        }else{
            curNode =curNode.left;
        }

        if(curNode === null){
            break;
        }
    }

    return curNode;
}
function remove(data){
    this.root = removeNode(this.root, data);
}
function removeNode(node, data){
    if(node === null){
        return null;
    }

    if(node.data === data){
        if(node.left === null && node.right === null){
            return null;
        }

        if(node.left === null){
            return node.right;
        }

        if(node.right === null){
            return node.left;
        }

        var tmpNode = getMin(node.right);

        node.data = tmpNode;
        node.right=  removeNode(node.right, tmpNode);

    }else{
        if(node.data < data){
            node.right = removeNode(node.right, data);
        }else{
            node.left = removeNode(node.left, data);
        }


    }

    return node;
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
preOrder(nums.root);
print("\n");

nums.remove(23);

preOrder(nums.root);
print("\n");