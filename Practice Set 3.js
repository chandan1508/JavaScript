let marks={
    chandan:78,
    kundan:75,
    guddu:79
}
// Problem 1
for(let i=0;i<Object.keys(marks).length;i++){
      console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}
// Problem 2
for(let key in marks){
    console.log("The marks of "+key+" are "+marks[key])
}

// Problem 3
// let num
// while(num!=15){
//     num=prompt("enter a number")
// }
// console.log("Correct number")

// Problem 4

const mean=(a,b,c,d)=>{
     return (a+b+c+d)/4;
}

console.log(mean(2,3,4,5));