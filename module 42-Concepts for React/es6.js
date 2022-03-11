const numbers = [89, 45, 98, 12];
const student = {
    name: "Salib Khan",
    age: 32,
    movies: ["king", "Dhakar Mastna"],
};

// 1. template String
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked moviees ${student.movies[0]}`;

//2.arrow function

const getFiftyFive = () => 55;

const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
};

//spread operator
const newNumbers = [...numbers];
//crete a new array from an older array and add an array ;

const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);

numbers.push(99);

// console.log(newNumbers);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);