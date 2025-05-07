
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



//Function overloading
//FFunction Overloading allows you to define multiple function signatures for the same function name.It enables your function to behave differently based on the input parameter types or count.


//🔧 Syntax
// Step 1: Define multiple signatures
// Step 2: Provide a single implementation


//Eg : 
function greet(person: string): string;
function greet(person: number): string;

// 👇 Actual implementation
function greet(person: string | number): string {
    if (typeof person === "string") {
        return `Hello, ${person}`;
    } else {
        return `User ID: ${person}`;
    }
}

console.log(greet("Anish"));  // Hello, Anish
console.log(greet(101));      // User ID: 101


//Eg:
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine("Priv", "Guard")); // "PrivGuard"
console.log(combine(10, 5));           // 15



//Eg : 
function makePayment(amount: number): string;
function makePayment(amount: number, currency: string): string;

function makePayment(amount: number, currency?: string): string {
    if (currency) {
        return `Paid ${amount} in ${currency}`;
    }
    return `Paid ${amount} in default currency`;
}

console.log(makePayment(100));           // Paid 100 in default currency
console.log(makePayment(200, "USD"));    // Paid 200 in USD
console.log(makePayment(300, "INR"));    // Paid 300 in INR


//Generics
//Generics allow you to create reusable components that can work with any data type. They provide a way to define a function, class, or interface that can operate on multiple types without losing type safety.

// function Generics 

function genericFunction<T>(a: T, b: T): T {
    console.log(a, b);
    // return a; // Ensure a value is returned
    return <T> "Hello" // Type assertion to T
}

genericFunction<number>(10,20) // number  // Explicitly specifying T as number

let a = genericFunction(10,20) // number  // TS infers T as number automatically
console.log(a)
genericFunction("Hello", "World") // string  

//interface Generics


interface rocket <T> {
    name: string,
    speed: number,
    fuel: number,
    key: T

}


const rocket1: rocket<string> = {
    name: "Falcon 9",
    speed: 20000,
    fuel: 1000,
    key: "1234"
}

const rocket2: rocket<number> = {
    name: "Falcon 9",
    speed: 20000,
    fuel: 1000,
    key: 1234
}

console.log(rocket1.key) // string
console.log(rocket2.key) // number


//Generics Classes


class GenericClass<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const numberClass = new GenericClass<number>();
numberClass.addItem(1);
numberClass.addItem(2);
console.log(numberClass.getItems()); // [1, 2]