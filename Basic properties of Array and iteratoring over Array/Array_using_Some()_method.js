array = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = array.some(lessthanFourCheck)
 
 
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}else{
    console.log("All elements are greater than 4 ")
}