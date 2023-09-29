function myfunction(num){
return  num*num;
}
console.log(myfunction(4));

// Equivalent to const myFunction = (num) =>{ return num*num; }

const myFunction = num => num*num;
console.log(myFunction(6));

var obj = {
    num: 10,
    myFunc: () => {console.log(this.num)}
  }
    
  obj.myFunc();