const a=5;
console.log(a)
// a=10 re-assignment is not allowed

let b="chandan"

{
    let b="anuj"
    console.log(b)
    var c=20
}
console.log(b)
console.log(c)