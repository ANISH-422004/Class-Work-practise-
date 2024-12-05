// import user, { user3 } from "./app.js"
// import { user2 } from "./app.js";

// console.log(user);
// console.log(user2,user3);

import a from "./app.js";  // default export me ham koi bhi nam se reciver kar sakte hai  without usinf  {}
                            // with name export we need to use same name as in export file using {}


let ans  = a()
console.log(ans);
