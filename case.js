const userNume = 'blackpink';
const userInput = 'blackpinK';
console.log(userInput.toUpperCase());
console.log(userNume.toLocaleLowerCase())
if(userNume === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}