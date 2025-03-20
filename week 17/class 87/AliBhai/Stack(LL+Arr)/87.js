//Stack : Defination : Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).


//stack using LInked List : 
// 1. push : add element to the top of the stack
// 2. pop : remove element from the top of the stack
// 3. isEnmpty : check if stack is empty
// 4. print : print the stack
// 5. peek : return the top element of the stack

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class stack {
//     constructor() {
//         this.top = null;
//         this.size = 0;
//     }

//     push(value) {
//         let newNode = new Node(value);
//         if (this.size === 0) {
//             this.top = newNode;
//         }
//         else {
//             newNode.next = this.top;
//             this.top = newNode;
//         }
//         this.size++;
//     }

//     pop() {
//         if (this.size === 0) {
//             return "Stack is empty";
//         }
//         else {
//             let temp = this.top;
//             this.top = this.top.next;
//             this.size--;
//             return temp.value;
//         }
//     }

//     isEnmpty() {
//         return this.size === 0;
//     }

//     print() {
//         let temp = this.top;
//         while (temp != null) {
//             console.log( temp.value)
//             console.log("|")
//             temp = temp.next;
//         }
//         console.log("null");
//     }
//     peek(){
//         if(this.size === 0){
//             return "Stack is empty";
//         }
//         else{
//             return this.top.value;
//         }
//     }
// }


// let s1 = new stack();
// s1.push(10);
// s1.push(20);
// s1.push(30);
// s1.print();
// console.log(s1.pop());
// s1.print();
// console.log(s1.pop());
// s1.print();
// console.log(s1.pop());
// s1.print();
// console.log(s1.pop());
// s1.print();
// console.log(s1.isEnmpty());
// s1.print();
// s1.push(40);
// s1.print();
// console.log(s1.isEnmpty());
// s1.print();
// console.log(s1.pop());
// s1.print();
// console.log(s1.isEnmpty());
// s1.print();
// console.log(s1.pop());


// Stack Implementation using Array 


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.arr = [];
        this.size = 0;
    }
    push(value) {
        this.arr.push(value);
        this.size++;
    }
    pop() {
        if (this.size === 0) {
            return "Stack is empty";
        }
        else {
            this.size--;
            return this.arr.pop();
        }
    }
    isEnmpty() {
        return this.size === 0;
    }
    print() {
        let str = "";
        for (let i = 0; i < this.size; i++) {
            str += this.arr[i] + "->";
        }
        str += "null";
        console.log(str);
    }
    peek() {
        if (this.size === 0) {
            return "Stack is empty";
        }
        else {
            return this.arr[this.size - 1];
        }
    }

}

let s1 = new stack();
s1.push(10);
s1.push(20);
s1.push(30);
s1.print();
console.log(s1.pop());
s1.print();
console.log(s1.pop());
s1.print();
console.log(s1.pop());
s1.print();
console.log(s1.pop());
s1.print();
console.log(s1.isEnmpty());
s1.print();
s1.push(40);
s1.print();
console.log(s1.isEnmpty());
s1.print();
console.log(s1.peek())
