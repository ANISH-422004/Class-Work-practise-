// creating DLL
class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null
        this.size = 0
    }

    addHead(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            this.size++
            return this.head
        }
        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            this.size++
            return this.head
        }
    }
    addTail(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            this.size++
            return this.head
        }
        let temp = this.head
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode
        newNode.prev = temp
        this.size++
        return this.head
    }


    deleteHead() {
        if (this.head == null) {
            return 'Empty DLL'
        }
        if (this.head.next == null) {
            this.head = null
            this.size--
            return 'DLL is Empty'
        }
        else {
            this.head = this.head.next
            this.head.prev = null
            this.size--

            return this.head
        }

    }


    deleteTail() {
        if (this.head == null) {
            return 'Empty DLL'
        }
        if (this.head.next == null) {
            this.head = null
            this.size--
            return this.head
        }
        let temp = this.head
        while (temp.next.next != null) {
            temp = temp.next
        }
        temp.next = null;
        this.size--
        return this.head

    }

    deleteAt(i) {
        if (i < 0 || i >= this.size) {
            return 'Invalid Index'
        }
        if (i == 0) {
            this.deleteHead()
        }
        else if (i == this.size - 1) {
            this.deleteTail()
        }
        else {
            let temp = this.head
            let count = 0
            while (count < i) {  // want to stop on ith node
                temp = temp.next
                count++
            }
            temp.prev.next = temp.next
            temp.next.prev = temp.prev
            this.size--
            return this.head
        }

    }

    deleteNode(val) {
        if (this.head == null) {
            return "Empty DLL";
        }
    
        // If the node to delete is the head
        if (this.head.value === val) {
            return this.deleteHead();
        }
    
        let temp = this.head;
    
        while (temp != null) {
            if (temp.value === val) {
                // If deleting the last node (tail)
                if (temp.next === null) {
                    temp.prev.next = null;
                } 
                else {
                    temp.prev.next = temp.next;
                    temp.next.prev = temp.prev;
                }
                this.size--;
                return this.head;
            }
            temp = temp.next;
        }
    
        return "Node not found";
    }
    

    insertAt(i, val) {
        if(i < 0 || i >= this.size){
            return 'Invalid Index'
        }
        if(i == 0){
            return this.addHead(val)
        }
        if(i == this.size-1){
            return this.addTail(val)
        }
        let newNode = new Node(val)
        let temp = this.head
        let count = 0 
        while(count < i){
            temp = temp.next
            count++
        }

        temp.prev.next = newNode
        newNode.prev = temp.prev
        newNode.next = temp
        temp.prev = newNode

        this.size++

        return this.head
    }



    print() {
        let temp = this.head
        let str = ''
        while (temp != null) {
            str += temp.value + ' <-> '
            temp = temp.next
        }
        return str
    }


}



let DLL1 = new DLL()
DLL1.addHead(10)
DLL1.addHead(20)
console.log(DLL1.print())
DLL1.deleteHead()
console.log(DLL1.print())



let DLL2 = new DLL()
DLL2.addHead(10)
DLL2.addHead(20)
DLL2.addHead(30)
console.log(DLL2.print())
DLL2.deleteTail()
console.log(DLL2.print())




let DLL3 = new DLL()
DLL3.addHead(10)
DLL3.addHead(20)
DLL3.addHead(30)
console.log(DLL3.print())
DLL3.deleteAt(1)
console.log(DLL3.print())


let DLL4 = new DLL()
DLL4.addHead(10)
DLL4.addHead(20)
DLL4.addHead(30)
console.log(DLL4.print())
DLL4.deleteNode(10)
console.log(DLL4.print())



let DLL5 = new DLL()
DLL5.addHead(10)
DLL5.addHead(20)
DLL5.addHead(30)
console.log(DLL5.print())
DLL5.insertAt(2, 50)
console.log(DLL5.print())