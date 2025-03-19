// linkedlist implementaion of queue
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.size === 0){
            this.front = newNode;
            this.rear = newNode;
        }
        else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }   

    dequeue(){
        if(this.size === 0){
            return "Queue is empty";
        }
        else{
            let temp = this.front;
            this.front = this.front.next;
            this.size--;
            return temp.value;
        }
    }

    isEnmpty(){
        return this.size === 0;
    }

    print(){
        let temp = this.front;
        let str = "";
        while(temp!=null){
            str+=temp.value+"->";
            temp = temp.next;
        }
        str+="null";
        console.log(str);
    }


}


let q1 = new queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.print();
console.log(q1.dequeue());
q1.print();
console.log(q1.dequeue());
q1.print();
console.log(q1.size) 