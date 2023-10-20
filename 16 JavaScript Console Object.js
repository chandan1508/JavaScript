console.log(console)

console.assert(5>55)

console.assert(5<55)

console.info("info")

console.warn("warn")

console.error("err")

console.time("forLoop")
for(let i=0;i<5;i++){
    console.log(5);
}
console.timeEnd("forLoop")