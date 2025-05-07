// let a = () => {
//     console.log("Hello")
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    // public name: string;
    // private password: string;
    // protected role: string;
    // constructor(name: string, password: string, role: string) {
    //     this.name = name;
    //     this.password = password;
    //     this.role = role;
    // }
    // parameter properties
    function User(name, password, role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }
    User.prototype.greet = function () {
        console.log("Hi, I\u2019m ".concat(this.name));
    };
    User.prototype.showPassword = function () {
        console.log("Password is ".concat(this.password));
    };
    User.prototype.showRole = function () {
        console.log("Role is ".concat(this.role));
    };
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser(name, password, role) {
        return _super.call(this, name, password, role) || this;
    }
    subUser.prototype.showRole = function () {
        console.log("Role is ".concat(this.role)); // ✅ OK (protected)
    };
    // public showPassword() {
    //     console.log(`Password is ${this.password}`); // ❌ Error (private)
    // }
    subUser.prototype.showAdmin = function () {
        console.log("Role is ".concat(this.role)); // ✅ OK (protected)
    };
    return subUser;
}(User));
var subUser1 = new subUser("anish", "1234", "user");
subUser1.showRole();
// ✅ OK (protected)
// subUser1.showPassword() // shows error while compilation 
subUser1.showAdmin();
var user = new User("Anish", "123456", "user");
// user.greet();                // ✅ OK
// console.log(user.name);      // ✅ OK (public)
// console.log(user.password); ❌ Error (private)
// console.log(user.role);     ❌ Error (protected)
// getter and setter 
var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this._brand = brand;
        this._speed = speed;
    }
    Object.defineProperty(Car.prototype, "brand", {
        // ✅ Getter for brand
        get: function () {
            return this._brand;
        },
        // ✅ Setter for brand
        set: function (newBrand) {
            if (newBrand.length < 2) {
                throw new Error('Brand name must be at least 2 characters long.');
            }
            this._brand = newBrand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "speed", {
        // ✅ Getter for speed
        get: function () {
            return this._speed;
        },
        // ✅ Setter for speed
        set: function (newSpeed) {
            if (newSpeed < 0) {
                throw new Error('Speed cannot be negative!');
            }
            this._speed = newSpeed;
        },
        enumerable: false,
        configurable: true
    });
    // A method to accelerate
    Car.prototype.accelerate = function (amount) {
        this._speed += amount;
    };
    // A method to brake
    Car.prototype.brake = function (amount) {
        this._speed = Math.max(0, this._speed - amount);
    };
    return Car;
}());
var car = new Car('Tesla', 120);
console.log(car.brand); // ✅ "Tesla" (getter)
car.brand = 'BMW'; // ✅ uses setter
console.log(car.speed); // ✅ 120
car.speed = 140; // ✅ updates via setter
car.accelerate(10); // now 150
console.log(car.speed); // 150
car.brake(20); // now 130
console.log(car.speed); // 130
// car.speed = -10;       ❌ throws Error: "Speed cannot be negative!"
//abstract class and inheritance
// Abstract classes are like blueprints for other classes. They can have abstract methods (which must be implemented in derived classes) and concrete methods (which can be used as-is or overridden).
// They cannot be instantiated directly, meaning you can't create an object of an abstract class. Instead, you create subclasses that extend the abstract class and implement its abstract methods.
// Abstract classes are useful when you want to define a common interface for a group of related classes, while still allowing for specific implementations in each subclass.
// 🔶 Step 1: Abstract class - common structure for all payment types
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(amount) {
        this.amount = amount;
    } // shared 'amount' for all payment types
    // ✅ Shared method: available to all subclasses without rewriting
    PaymentProcessor.prototype.printReceipt = function () {
        console.log("\u2705 Payment of \u20B9".concat(this.amount, " processed."));
    };
    return PaymentProcessor;
}());
// 💳 Step 2: Credit Card payment class that extends abstract class
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardPayment.prototype.processPayment = function () {
        console.log("\uD83D\uDCB3 Processing \u20B9".concat(this.amount, " via Credit Card..."));
        // You could add logic here like: validateCard(), call API, etc.
        this.printReceipt(); // call shared method from base class
    };
    return CreditCardPayment;
}(PaymentProcessor));
// 💰 Step 3: UPI payment class
var UpiPayment = /** @class */ (function (_super) {
    __extends(UpiPayment, _super);
    function UpiPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpiPayment.prototype.processPayment = function () {
        console.log("\uD83D\uDCF1 Processing \u20B9".concat(this.amount, " via UPI (Google Pay/PhonePe)..."));
        // Real logic might include QR generation, UPI handle check, etc.
        this.printReceipt(); // reuse shared receipt method
    };
    return UpiPayment;
}(PaymentProcessor));
// 🧪 Step 4: Using the classes
var creditPayment = new CreditCardPayment(2000);
creditPayment.processPayment();
var upiPayment = new UpiPayment(750);
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
var abcd = function (name, cb) {
    console.log(name);
    return cb();
};
var ans = abcd("anish", function () {
    console.log("Hello");
    return 2;
});
console.log(ans);
// 👇 Actual implementation
function greet(person) {
    if (typeof person === "string") {
        return "Hello, ".concat(person);
    }
    else {
        return "User ID: ".concat(person);
    }
}
console.log(greet("Anish")); // Hello, Anish
console.log(greet(101)); // User ID: 101
function combine(a, b) {
    return a + b;
}
console.log(combine("Priv", "Guard")); // "PrivGuard"
console.log(combine(10, 5)); // 15
function makePayment(amount, currency) {
    if (currency) {
        return "Paid ".concat(amount, " in ").concat(currency);
    }
    return "Paid ".concat(amount, " in default currency");
}
console.log(makePayment(100)); // Paid 100 in default currency
console.log(makePayment(200, "USD")); // Paid 200 in USD
console.log(makePayment(300, "INR")); // Paid 300 in INR
