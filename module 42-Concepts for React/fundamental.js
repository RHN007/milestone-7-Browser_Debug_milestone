// 1. how to declare a variable using let and const
const fatherName = "arnold";
const season = "rainny";
season = "winter";

// 6 basic condintion  <, >, !== <= , >= ;
//multiple condition: && !!

//3. array
//index
//length , push
const numbers = [89, 45, 98, 12];
numbers[0] = 56;

//4.  for loop
for (i = 0; i < numbers.length; i++) {
    const number = number[i];
    confirm.log(number);
}

//5. function

function multiply(num1, num2) {
    const result = num1 + num2;
    return result;
}

const output = multiply(35, 79);

// 6. object
const student = {
    name: "Salib Khan",
    age: 32,
    movies: ["king", "Dhakar Mastna"],
};

const myVariable = "age";

console.log(student.age); //direct by property
console.log(student["age"]); //access via property name string
console.log(student[myVariable]); //access via property name in a variable