// problem-1

/* let a=prompt("what is your age?")
a=Number.parseInt(a);
if(a>10 && a<20){
    console.log("valid age.")
}
else{
    console.log("Not a valid age.")
} */

// Problem-2

/* let age=prompt("What is your age?")
switch(age){
    case '14':
        console.log("valid")
        break;
    case '15':
        console.log("valid")
        break;
    case '16':
        console.log("valid")
        break;
    default:
        console.log("Not valid")
}
*/

// problem-3

let num=prompt("Enter a number:");
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("Divisible by 2 and 3.")
}
else{
    console.log("Not Divisible by 2 and 3.")
}
