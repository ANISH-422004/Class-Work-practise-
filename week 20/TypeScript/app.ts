
let a = () => {
    console.log("Hello")
}

a()

enum userRole {
    ADMIN = "admin",
    USER = "user",
}


const obj: { name: string, age: number } = {
    name: "John",
    age: 20
}

obj.name = "Doe"

console.log(obj.name)


interface User {
    name: string,
    age: number,
    gender?: string, // required property
}
interface User2 {
    name: string,
    age: number,
    gender?: string, // optional property
    [key: string]: any // index signature : allows any additional properties    
}


function getUser(user: User): string {
    return `Name : ${user.name} Age : ${user.age} gender : ${user.gender ? user.gender : "Not specified"}`
}


// console.log(getUser({name: "John" , age: 20})) 


// 2 interface with same name
// 1. interface with same name will be merged


interface abcd {
    name: string,
    age: number,
}


interface abcd {
     gender?: string,
}


let obj2: abcd = { 
    name: "John",
    age: 20,

}



class User {
    public name: string;        // Accessible everywhere
    private password: string;   // Only inside this class
    protected role: string;     // Inside this class + subclasses
  
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


  const user = new User("Anish", "123456", "user");
user.greet();                // ✅ OK
console.log(user.name);      // ✅ OK (public)
// console.log(user.password); ❌ Error (private)
// console.log(user.role);     ❌ Error (protected)

  