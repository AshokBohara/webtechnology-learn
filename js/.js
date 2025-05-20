//learning javascript
// 1. Variables
var ashok = {
    name: "Ashok",
    age: 21,
    greet: function() {
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