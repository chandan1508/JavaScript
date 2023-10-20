// Problem 1

// let age = prompt("Enter your age?")
// age=Number.parseInt(age)
// const canDrive= (age)=>{
//     return age>18?true:false
// }
// if(canDrive){
//     alert("You can drive")
// }
// else{
//     alert("You can not drive")
// }

// Problem 2


const canDrive = (age) => {
    return age > 18 ? true : false;
  };
let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your age?");
    age = Number.parseInt(age);
  if (canDrive) {
    alert("You can drive");
  } else {
    alert("You can not drive");
  }
  runAgain=confirm("Do you want to run again?")
}
