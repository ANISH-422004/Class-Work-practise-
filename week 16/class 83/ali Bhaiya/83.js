// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     // Add a node at the end of the list
//     add(value) {
//         const newNode = new Node(value);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         this.size++;
//     }

//     // Remove a node from the list
//     remove(value) {
//         if (this.head === null) return null;

//         if (this.head.value === value) {
//             this.head = this.head.next;
//             this.size--;
//             return;
//         }

//         let current = this.head;
//         let previous = null;
//         while (current !== null && current.value !== value) {
//             previous = current;
//             current = current.next;
//         }

//         if (current === null) return null;

//         previous.next = current.next;
//         this.size--;
//     }

//     // Print the list
//     print() {
//         let current = this.head;
//         if(current === null) { // if list is empty
//             console.log("List is empty");
//             return;
//         }
//         while (current) { // while current is not null and null is a falsy value which will break the loop
//             console.log(current.value);
//             current = current.next;
//         }
//     }
// }

// // Example usage:
// const list = new LinkedList();     
// list.add(10);
// list.add(20);
// list.add(30);
// list.print(); // Output: 10 20 30
// list.remove(20);
// list.print(); // Output: 10 30


// what is LinkedList?
// LinkedList is a data structure that represents a sequence of nodes. In a singly linked list, each node points to the next node in the linked list. A doubly linked list gives each node pointers to both the next node and the previous node.

//singly linked list
// [val|next] -> [val|next] -> [val|next] -> [val|next] -> null
// head                                      // tail                               

// doubly linked list
// [prev|val|next] <-> [prev|val|next] <-> [prev|val|next] <-> [prev|val|next] <-> null
// head                                                         // tail


//circuler linked list
// [val|next] -> [val|next] -> [val|next] -> [val|next] |
//  ^                                                   |
//  |---------------------------------------------------|


// creating a LinkedList class :

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFormHead(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    addFromTail(val) {
        const newNode = new Node(val);
        if (this.head === null) { // if its the first node
            this.head = newNode;
            return
        }
        // now if it is not the last node traverse to the last node 
        let temp = this.head
        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode // add the new node to the last node
    }


    print() {
        let temp = this.head;
        if (temp === null) {
            console.log('List is empty');
            return;
        }

        let str = '';  // Start with an empty string
        while (temp !== null) {  // ✅ Correct loop
            str += temp.val + ' -> ';
            temp = temp.next;
        }

        return str.slice(0, -4); // ✅ Removes the extra ' -> ' at the end
    }


    size() {
        let temp = this.head;
        if (temp == null) {  // ✅ This part is correct (handling empty list)
            return 0;
        }
        let length = 1;
        while (temp.next !== null) {  // ❌ Infinite loop
            length++;
            temp = temp.next;
            // ❌ Missing temp = temp.next; (temp never moves forward)
        }
        return length;
    }

    // arrati to linkenedList

    arrToLL(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.addFromTail(arr[i])
        }
    }

    removeHead() {
        let currentHead = this.head
        if (currentHead === null) {
            return
        }
        this.head = currentHead.next
        return this.head //node val after the current head
    }


    removeTail() {
        let head = this.head
        if (head === null) {
            return
        }
        if (head.next === null) {
            this.head = null
            return
        }
        let temp = this.head
        while (temp.next.next !== null) {
            temp = temp.next
        }

        temp.next = null

        return this.head
    }
}


const list = new LinkedList();
list.addFromTail(10);
list.addFromTail(20);
list.addFromTail(30);
console.log(list.head) // 10
console.log(list.head.next) // 20

let node1 = new Node(10)
let node2 = new Node(20)

node1.next = node2

console.log(node1) // 10 -> 20
console.log(node1.next) // 20
console.log(node1.next == node2) // this will return true because both are pointing to the same object 

// js stores the object in the memory and the reference to the object is stored in the variable so when we compare two objects it compares the reference of the object not the object itself


// inserting form head 
// 10 -> 20 -> 30
let list1 = new LinkedList()
list1.insertFormHead(10)
list1.insertFormHead(20)
list1.insertFormHead(30)
console.log(list1.head) // 30
console.log(list1.print())


let List2 = new LinkedList()

List2.addFromTail(10)
List2.insertFormHead(20)
List2.addFromTail(30)

console.log(List2.print())
console.log(List2.size()) // 3


let arr = [10, 20, 30, 40, 50]
let list3 = new LinkedList()
list3.arrToLL(arr)
console.log(list3.print()) // 10 -> 20 -> 30 -> 40 -> 50


let list4 = new LinkedList()
list4.addFromTail(10)
list4.addFromTail(20)
list4.addFromTail(30)
console.log(list4.print()) // 10 -> 20 -> 30
let CH = list4.removeHead()
console.log(CH)
console.log(list4.print()) // 20 -> 30 



let List5 = new LinkedList()
let arr2 = [10, 23, 33, 56]
List5.arrToLL(arr2)


console.log(List5.removeTail())
console.log(List5.print())
