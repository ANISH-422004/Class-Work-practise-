
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
    public name: string;
    private password: string;
    protected role: string;


    constructor(name: string, password: string, role: string) {
        this.name = name;
        this.password = password;
        this.role = role;
    }

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

    public showAdmin(){
        console.log(`Role is ${this.role}`); // ✅ OK (protected)
    }


}


const subUser1 = new subUser("anish" , "1234" , "user")
subUser1.showRole(); 
// ✅ OK (protected)
// subUser1.showPassword() // shows error while compilation 
subUser1.showAdmin()


const user = new User("Anish", "123456", "user");
// user.greet();                // ✅ OK
// console.log(user.name);      // ✅ OK (public)
// console.log(user.password); ❌ Error (private)
// console.log(user.role);     ❌ Error (protected)

