var a = function () {
    console.log("Hello");
};
a();
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "admin";
    userRole["USER"] = "user";
})(userRole || (userRole = {}));
var obj = {
    name: "John",
    age: 20
};
obj.name = "Doe";
console.log(obj.name);
function getUser(user) {
    return "Name : ".concat(user.name, " Age : ").concat(user.age, " gender : ").concat(user.gender ? user.gender : "Not specified");
}
console.log(getUser({ name: "John", age: 20 }));
