
// let a = () => {
//     console.log("Hello")
// }

// a()

// enum userRole {
//     ADMIN = "admin",
//     USER = "user",
// }


// const obj: { name: string, age: number } = {
//     name: "John",
//     age: 20
// }

// obj.name = "Doe"

// console.log(obj.name)


// interface User {
//     name: string,
//     age: number,
//     gender?: string, // required property
// }
// interface User2 {
//     name: string,
//     age: number,
//     gender?: string, // optional property
//     [key: string]: any // index signature : allows any additional properties    
// }


// function getUser(user: User): string {
//     return `Name : ${user.name} Age : ${user.age} gender : ${user.gender ? user.gender : "Not specified"}`
// }


// // console.log(getUser({name: "John" , age: 20})) 


// // 2 interface with same name
// // 1. interface with same name will be merged


// interface abcd {
//     name: string,
//     age: number,
// }


// interface abcd {
//      gender?: string,
// }


// let obj2: abcd = { 
//     name: "John",
//     age: 20,

// }



class User {
    // public name: string;
    // private password: string;
    // protected role: string;


    // constructor(name: string, password: string, role: string) {
    //     this.name = name;
    //     this.password = password;
    //     this.role = role;
    // }

    // parameter properties
    constructor(public name: string, private password: string, protected role: string) { }


    public greet() {
        console.log(`Hi, I’m ${this.name}`);
    }

    private showPassword() {
        console.log(`Password is ${this.password}`);
    }

    protected showRole() {
        console.log(`Role is ${this.role}`);
    }
}

class subUser extends User {
    constructor(name: string, password: string, role: string) {
        super(name, password, role);
    }

    public showRole() {
        console.log(`Role is ${this.role}`); // ✅ OK (protected)
    }

    // public showPassword() {
    //     console.log(`Password is ${this.password}`); // ❌ Error (private)
    // }

    public showAdmin() {
        console.log(`Role is ${this.role}`); // ✅ OK (protected)
    }


}


const subUser1 = new subUser("anish", "1234", "user")
subUser1.showRole();
// ✅ OK (protected)
// subUser1.showPassword() // shows error while compilation 
subUser1.showAdmin()


const user = new User("Anish", "123456", "user");
// user.greet();                // ✅ OK
// console.log(user.name);      // ✅ OK (public)
// console.log(user.password); ❌ Error (private)
// console.log(user.role);     ❌ Error (protected)



// getter and setter 
class Car {
    // Private fields (accessible only inside the class)
    private _brand: string;
    private _speed: number;

    constructor(brand: string, speed: number) {
        this._brand = brand;
        this._speed = speed;
    }

    // ✅ Getter for brand
    get brand(): string {
        return this._brand;
    }

    // ✅ Setter for brand
    set brand(newBrand: string) {
        if (newBrand.length < 2) {
            throw new Error('Brand name must be at least 2 characters long.');
        }
        this._brand = newBrand;
    }

    // ✅ Getter for speed
    get speed(): number {
        return this._speed;
    }

    // ✅ Setter for speed
    set speed(newSpeed: number) {
        if (newSpeed < 0) {
            throw new Error('Speed cannot be negative!');
        }
        this._speed = newSpeed;
    }

    // A method to accelerate
    accelerate(amount: number): void {
        this._speed += amount;
    }

    // A method to brake
    brake(amount: number): void {
        this._speed = Math.max(0, this._speed - amount);
    }
}


const car = new Car('Tesla', 120);

console.log(car.brand);   // ✅ "Tesla" (getter)
car.brand = 'BMW';        // ✅ uses setter

console.log(car.speed);   // ✅ 120
car.speed = 140;          // ✅ updates via setter

car.accelerate(10);       // now 150
console.log(car.speed);   // 150

car.brake(20);            // now 130
console.log(car.speed);   // 130

// car.speed = -10;       ❌ throws Error: "Speed cannot be negative!"



//abstract class and inheritance
// Abstract classes are like blueprints for other classes. They can have abstract methods (which must be implemented in derived classes) and concrete methods (which can be used as-is or overridden).
// They cannot be instantiated directly, meaning you can't create an object of an abstract class. Instead, you create subclasses that extend the abstract class and implement its abstract methods.
// Abstract classes are useful when you want to define a common interface for a group of related classes, while still allowing for specific implementations in each subclass.


// 🔶 Step 1: Abstract class - common structure for all payment types
abstract class PaymentProcessor {
    constructor(public amount: number) { } // shared 'amount' for all payment types

    // 🛑 Abstract method: forces subclasses to implement their own logic
    abstract processPayment(): void;

    // ✅ Shared method: available to all subclasses without rewriting
    printReceipt() {
        console.log(`✅ Payment of ₹${this.amount} processed.`);
    }
}

// 💳 Step 2: Credit Card payment class that extends abstract class
class CreditCardPayment extends PaymentProcessor {
    processPayment(): void {
        console.log(`💳 Processing ₹${this.amount} via Credit Card...`);
        // You could add logic here like: validateCard(), call API, etc.
        this.printReceipt(); // call shared method from base class
    }
}

// 💰 Step 3: UPI payment class
class UpiPayment extends PaymentProcessor {
    processPayment(): void {
        console.log(`📱 Processing ₹${this.amount} via UPI (Google Pay/PhonePe)...`);
        // Real logic might include QR generation, UPI handle check, etc.
        this.printReceipt(); // reuse shared receipt method
    }
}

// 🧪 Step 4: Using the classes
const creditPayment = new CreditCardPayment(2000);
creditPayment.processPayment();

const upiPayment = new UpiPayment(750);
upiPayment.processPayment();


// FUNCTIONS

//callback function

//Syntax : function functionName(parameter: type, callback: (parameter: type) => returnType) {
//    // function body
//}
//Example :
// function add(a: number, b: number, callback: (result: number) => void) {
//     const result = a + b;
//     callback(result);
// }

// function add(a: number, b: number, callback: (result: number) => void) {
//     const result = a + b;
//     callback(result);
// }


// useage : 
// add(5, 10, (result) => {
//     console.log("The sum is: " + result);
// });




const abcd = function (name: string, cb: () => number): number {
    console.log(name)
    return cb()
}



let ans: number = abcd("anish", function () {
    console.log("Hello")
    return 2
})


console.log(ans)