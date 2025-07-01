// 1. Variables
var ashok =
{
    name: "Ashok",
    age: 21,
    greet: function()
    {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }

    };
var bohara =
{
    name: "bohara",
    age: 20,
    greet: function()
    {
        console.log("Hello, my name is " + this.name+ " and I am " + this.age + " years old.");
    }
};
ashok.greet();
bohara.greet();
let a= 10;
let b= 20;
function add(a, b)
{
return a + b;
}
console.log(add(a, b))
function subtract(a, b)
{
return a - b;
}
console.log(subtract(a, b))
function multiply(a, b)
{
return a * b;
}
console.log(multiply(a, b))


function divide(a, b)
{
if (b === 0)
    {
    console.log("Error: Division by zero is not allowed.");
    return undefined;
}
return a / b;
}
console.log(divide(a, b))


function modulus(a, b)
{
if (b === 0)
    {
    console.log("Error: Division by zero is not allowed.");
    return undefined;
}
return a % b;
}
