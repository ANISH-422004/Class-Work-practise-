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
user.greet(); // ✅ OK
console.log(user.name); // ✅ OK (public)
// console.log(user.password); ❌ Error (private)
// console.log(user.role);     ❌ Error (protected)
