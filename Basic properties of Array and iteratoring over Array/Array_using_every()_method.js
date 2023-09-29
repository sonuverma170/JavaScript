


index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
const under_five = x => x < 5;
 
if (array.every(under_five)) {
    console.log('All are less than 5');
}
else {
    console.log('At least one element is not less than 5');
}