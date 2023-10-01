// Problem-1
console.log("chan\"".length)

// Problem-2
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Problem-3
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));

console.log(str1.startsWith('Sat', 3));

// Problem-4
const str = 'Cats are the best!';

console.log(str.endsWith('best!'));

console.log(str.endsWith('best', 17));

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));

// Problem-5
let str3="Please give Rs 1000";
let amount=Number.parseInt(str3.slice("Please give Rs ".length))
console.log(amount);
console.log(typeof amount)

// Problem-6
let friend="Deepika";
friend[3]="r";
console.log(friend)

