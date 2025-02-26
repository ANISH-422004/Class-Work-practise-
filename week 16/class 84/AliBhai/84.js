class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedLisk {
    constructor() {
        this.head = null
    }
    addTail(val) {
        let newNode = new Node(val)
        let head = this.head
        if (head == null) {
            this.head = newNode
            return this.head
        }
        let temp = head
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode

        return this.head
    }

    insertAtHead(val) {
        let newNode = new Node(val)
        let head = this.head
        if (head == null) {
            this.head = newNode
            return this.head
        }
        newNode.next = head
        this.head = newNode
        return this.head
    }
    size() {
        let l =0 
        let temp = this.head
        while(temp){
            l++
            temp = temp.next
        }
        return l
    }
    insertAtKthPosition(val, k) {
        let newNode = new Node(val)
        let temp = this.head
        if (temp == null) {
            return 'Empty Linked List'
        }
        if (k == 1) {
            newNode.next = this.head
            this.head = newNode
            return this.head
        }
        if(k > this.size()){
            return 'Invalid Position'
        }
        if(k == this.size()){
            this.addTail(val)
            return this.head
        }

        for (let i = 1; i < k - 1; i++) {
            temp = temp.next
        }
        newNode.next = temp.next
    
        temp.next = newNode

        return this.head

    }
    print() {
        let head = this.head
        let str = ''
        if (!head) {

            return ('Empty Linked List')
        }
        while (head) {
            str += head.value + ' -> '
            head = head.next
        }
        return str
    }

}

let LL1 = new LinkedLisk()
LL1.addTail(1)
LL1.addTail(2)
LL1.addTail(3)

console.log(LL1.print())




LL1.insertAtHead(0)
console.log(LL1.print())
console.log(LL1.size())

let LL2 = new LinkedLisk()
console.log(LL2.size())

LL2.addTail(1)
LL2.addTail(2)
LL2.addTail(3)
LL2.addTail(4)
LL2.insertAtKthPosition(5,3)

console.log(LL2.print())