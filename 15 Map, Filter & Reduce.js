// Array Map Method

let arr=[43,23,48]

let a=arr.map((value)=>{
    // console.log(value)
    return value+1
})

// console.log(a)

// Array Filter Method

let arr1=[45,75,28,36,78,4,7,9]

let b=arr1.filter((value)=>{
    return value<10;
})

// console.log(b)

let arr3=[4,2,3,5,4,6,6]

let ans=arr3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(ans)