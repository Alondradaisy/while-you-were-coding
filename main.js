// ##### Introduction #####
//
// The below assignment will require NO functions
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//


// ##### Challenges #####

console.log('##### Challenge 1 #####');
// 1.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.
// Hint: Use `if` and a modulus operation.



for (let i = 1; i <= 20; i++);
    if (i % 3 === 0) {
    console.log(i);
}


console.log('##### Challenge 2 #####');
// 2.
//
// Console out the numbers from 1-20. BACKWARDS.

// for (let i = 20; i <=)
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newArr = numArr.reverse().push();
console.log(newArr);

const newArr2 = numArr.reverse().length -1;
console.log(newArr2)

const newArr3 = numArr.reverse().length-2;
console.log(newArr3)

const newArr4 = numArr.reverse().length-3;
console.log(newArr4);

const newArr5 = numArr.reverse().length-4;
console.log(newArr5);

const newArr6 = numArr.reverse().length[-5];
console.log(newArr6);

const newArr7 = numArr.reverse().length-6;
console.log(newArr7);

const newArr8 = numArr.reverse().length-7;
console.log(newArr8);

const newArr9 = numArr.reverse().length-8;
console.log(newArr9);

const newArr10 = numArr.reverse().length-9;
console.log(newArr10);

const newArr11 = numArr.reverse().length-10;
console.log(newArr11);

const newArr12 = numArr.reverse().length-11;
console.log(newArr12);

const newArr13 = numArr.reverse().length-12;
console.log(newArr13);

const newArr14 = numArr.reverse().length-13;
console.log(newArr14);

const newArr15 = numArr.reverse().length-14;
console.log(newArr15);

const newArr16 = numArr.reverse().length-15;
console.log(newArr16); 


console.log('##### Challenge 3 #####');
// 3.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
let string3 = 'Boy howdy am I good at this!';

for (const letter of string3) {
    if (letter !== ' ') {
        console.log(letter);
    }
}


console.log('##### Challenge 4 #####');
// 4.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
let string4 = 'And getting better every day.';

for (let i = 1; i <string4.length; i = i + 3) {
    console.log(string4);
}

console.log('##### Challenge 5 #####');
// 5. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
let string5 = 'Am I the best?';

for(const letter of string5) {
    console.log(letter.toUpperCase());
}


console.log('##### Challenge 6 #####');
// 6.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
let string6 = 'Whoa, I am the best!';

let numSpacesBefore = 0;

for (const letter of string6) {
    if (letter === ' ') {
        numSpacesBefore = numSpacesBefore + 1;
    }
    if (numSpacesBefore === 2) {
        console.log(letter.toUpperCase(), numSpacesBefore);
    } else {
        console.log(letter, numSpacesBefore);
    }
}


console.log('##### Challenge 7 #####');
// 7.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
let string7 = 'I am become death, destroyer of worlds.';

for (let i = string7.length -1; i >= 0; i--) { // -- to go backwards instead of incrementing up
    console.log(string7[i]);
}

console.log('##### Challenge 8 #####');
// 8.
//
const names = 'Alex|Mesuara|Brian|Chanel|Matt|Jeremy B.|Jose|Andy|Dustin|Joshua|Steve H.|Cesar|Nastya|Jeremy L.|Michael|John|Lee|Ruth|Steve M.|Tim|Ronny|Stevie R|Neo|Rick|Kyle|Minahil|Adam|Sonny|James|Daisy|Willie';

let name = '';
for (const char of names) {
    if(char === '|') {
        console.log('Here today is: 'name'');
        name = '';
    } else {
        name =+ char; //same as name = name + char
    }
}
console.log('Here today is: 'name'');




// Console out the individual letters of each person in class, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!




