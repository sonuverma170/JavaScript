var names = ["alpha", "beta", "gamma", "delta"];
 
var firstName = names[0];
var secondName = names[1];
 
console.log(firstName);//"alpha"
console.log(secondName);
// first ,second===========================================
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
     
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 //====================================================================
//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(secondName);
//==============================================================
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(thirdName);