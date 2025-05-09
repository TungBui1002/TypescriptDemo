let Lname : string;

Lname = 'Tung';

let newname = Lname.toUpperCase();

console.log(newname);

let age : Number;

age = 22;
age = 22.4;
let dob = 25;

let result = parseInt(dob.toString());

console.log(result);

let isValid : Boolean = false;

console.log(isValid);

let emplist : string[] = ["Tung1, Tung2, Tung3"];

let deplist : Array<number>;

deplist = [1,2,3,4,5];

let results = deplist.filter((num)=> num >= 2);

let emp = emplist.find( (emp) => emp === "Tung1, Tung2, Tung3");

let sum = deplist.reduce((acc,dep) => acc + dep);

let names = ["Tung", "Nam", "Huy"];
let allNames = names.reduce((acc, name) => acc + ", " + name);

console.log(emplist);
console.log(results);
console.log(emp);
console.log(sum);
console.log(allNames);

enum Color {
    red,
    green,
    orange,
    blue
}

let c : Color = Color.blue;

console.log(c);

console.timeLog;

let swapNumbs: [firstNumber:number, secondNumber:number];

function swapNumbers(num1:number,num2:number) : [number,number] {
    return [num2,num1]
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];

let department : any;

department = "100";
department = "ITS";
department = "ATS";


console.log(department);


