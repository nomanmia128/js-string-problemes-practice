const jim = 84;
const dela = 97;
const chinku = 77;

if(jim > dela && jim > chinku){
    // console.log('jim will get the cake');
}
else if(dela > jim && dela > chinku){
    // console.log('Dela will eat cake in this bela');
}
else{
    // console.log('Chinku will get the cake');
}

// Homework 1
// write a function that take 3 number will return the max number
// write a function that will take 3 parameters and will return the min number

// first time do it using if-else
// second time do it using Math or Math.max

// function findMax(num1, num2, num3){
//     let max;
//     if(num1 >= num2 && num1 >= num3){
//         max = num1;
//     }
//     else if(num2 >= num1 && num2 >= num3){
//         max = num2;
//     }
//     else{
//         max = num3;
//     }
//     return max;
// }
// // console.log(findMax(2, 5, 7));
// console.log('This is maxmam number is:', findMax(10, 20, 40));

// NavigationPreloadManager
function findMax(noun1, noun2, noun3){
    let max;
    if(noun1 > noun2 && noun1 > noun3){
        max = noun1;
    }
    else if(noun2 > noun1 && noun2 > noun3){
        max = noun2;
    }
    else{
        max = noun3;
    }
    return max;
}
findMax(34, 56, 23);
console.log('This is maxmam noun is:');

// ------------


// using Math or Math.max--------

// function minOfThree(a, b, c){
//     return Math.min(a, b, c);
// }
// const num1 = 20;
// const num2 = 22;
// const num3 = 23;
// console.log('The minmam number is:', Math.min(num1, num2, num3));


