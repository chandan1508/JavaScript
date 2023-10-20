let x = Math.random() * 10;
let a;
a = prompt("Guess The number");
do {
 
  a = Number.parseInt(a);
  if (x == a) {
    console.log("You Won");
  } else if (a > x) {
    a = prompt("your number is Greater");
  } else if (a < x) {
    a = prompt("Your number is Lesser");
  }

  }
 while (a != x);
// not solved 