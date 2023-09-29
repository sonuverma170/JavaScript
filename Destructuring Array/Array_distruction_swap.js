var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 
//After swapping
[firstName, secondName] = [secondName, firstName]
     
console.log(firstName);//"beta"
console.log(secondName);

// ES5 to assign variables from objects its implementation isar marks = {x: 21, y: -34, z: 47 };
 
var x = marks.x; // x = 21
var y = marks.y; // y = -34
var z = marks.z; // z = 47
 
console.log(x);
console.log(y);
console.log(z);

// ===he above implementation in ES6 using destructuring assignment is.
var marks = {x: 21, y: -34, z: 47 };
 
const { x, y, z } = marks; // x = 21, y = -34, z = 47
 
 
console.log(x);
console.log(y);
console.log(z);