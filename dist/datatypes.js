"use strict";
let Lname;
Lname = 'Tung';
let newname = Lname.toUpperCase();
console.log(newname);
let age;
age = 22;
age = 22.4;
let dob = 25;
let result = parseInt(dob.toString());
console.log(result);
let isValid = false;
console.log(isValid);
let emplist = ["Tung1, Tung2, Tung3"];
let deplist;
deplist = [1, 2, 3, 4, 5];
let results = deplist.filter((num) => num >= 2);
let emp = emplist.find((emp) => emp === "Tung1, Tung2, Tung3");
let sum = deplist.reduce((acc, dep) => acc + dep);
let names = ["Tung", "Nam", "Huy"];
let allNames = names.reduce((acc, name) => acc + ", " + name);
console.log(emplist);
console.log(results);
console.log(emp);
console.log(sum);
console.log(allNames);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["orange"] = 2] = "orange";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
let c = Color.blue;
console.log(c);
console.timeLog;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let department;
department = "100";
department = "ITS";
department = "ATS";
console.log(department);
//# sourceMappingURL=datatypes.js.map