const us1 = {
    name: 'Jen',
    age: 22
};
  
const clonedUser = { ...us1 };
console.log(clonedUser);


const user1 = {
    name: 'Jen',
    age: 22,
};
  
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
  
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)