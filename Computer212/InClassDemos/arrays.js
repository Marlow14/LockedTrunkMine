const myArray = [1,22, 11,2,3,37, 4,5];
console.log('myArray', myArray);
myArray.sort(
        (a,b) => {
            return a-b;
        }

);
console.log('myArray after sort', myArray);



const myLetters = new Array('f','a','b','c');


myLetters.push('d');
const lastLetter = myLetters.pop();
console.log('letters', myLetters);
myLetters.sort();
console.log('letters after sort', myLetters);

console.log(`lastLetter=${lastLetter}`);




let myBand = { name: 'Beatles' , year: 1962 };
myBand = new Object();
myBand.name = 'Beatles';

console.log(myBand);