// Greeting!
let name = prompt("Hello World!🤓 My name is #$%&@!*#. What is your name?");
alert("Welcome " + name + "😄, it's really nice to meet you!");

// #1 Numerical input for age
let age = prompt("May I ask how old you will turn this year? 🤔"); // this
let yob = 2026 - age;
alert("That means you were born in " + yob + " 🤓");

//numerical input
let aStr = prompt("Yay! 😋 Give me a random integer");

//String
let a = Number(aStr);
let b = Number(age);

// Do something with it
alert("Watch what I can do with the numbers " + a + " and " + b + "! 🚀");

let sum = a + b;
alert(a + " + " + b + " = " + sum);
let diff = a - b;
alert(a + " - " + b + " = " + diff);
let prod = a * b;
alert(a + " * " + b + " = " + prod);
let div = a / b;
alert(a + " / " + b + " = " + div);
let mod = a % b;
alert(a + " % " + b + " = " + mod);

let max = Math.max(a, b);
alert("The max of " + a + " and " + b + " is " + max);

let min = Math.min(a, b);
alert("The min of " + a + " and " + b + " is " + min);

//decimal sections
let cStr = prompt("Please type in a decimal 😄");
let c = Number(cStr);

alert("Let me show you what I can do with this " + c + "!🚀");

let neg = -c;
alert("The negative of " + c + " is " + neg);

let sine = Math.sin(c);
alert("The sine of " + c + " radians is " + sine);

let cosine = Math.cos(c);
alert("The cosine of " + c + " radians is " + cosine);

let power = Math.pow(c, 10);
alert(c + "^10 = " + power);

let sqrt = Math.sqrt(c);
alert("The square root of " + c + " = " + sqrt);

let rounded = Math.round(c);
alert("Rounded " + c + " = " + rounded);

let floor = Math.floor(c);
alert(" Floor of " + c + " = " + floor);

let ceiling = Math.ceil(c);
alert(" Ceiling of " + c + " = " + ceiling);

let absolute = Math.abs(c);
alert("The absolute value of " + c + " = " + absolute);
