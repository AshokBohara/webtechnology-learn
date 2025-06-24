console.log('hello world')
let Name ='Ashok';
console.log(Name);

//object in javascript
let person =
{
name: 'Ashok',
age:20
};
console.log(person);

//Array
let selectedcolor=['red','blue'];
console.log(selectedcolor[0]);//here in array 0 assign the first value in array and 1 assign the second value like 0 assign  "red" and 1 assign "blue".
//function
function Agreet() {
    console.log('hello world');
}
Agreet();

//function
function greet(name, lastName)

{
    console.log('Hello' + ' ' + name + ' ' + lastName)
}
greet('Ashok', 'Bohara' );
greet('bohara','ashok')


function square(number)
{
    return number*number;
}
console.log(square(12));



    const text = document.getElementById('animated-text');
    const str = text.textContent;
    text.textContent = '';

    [...str].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'letter';
      text.appendChild(span);
      setTimeout(() => {
        span.classList.add('visible');
      }, i * 100);
    });
    