//1. Array Destructuring
const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34];
// console.log(boxify(90, 34));

const student = {
    name: "Salib Khan",
    age: 32,
    movies: ["king", "Dhakar Mastna"],
};

const [first, second] = student.movies;

//object destructuring

// const { name, age } = { name: "alu", age: 14 };
const { name, age } = { id: 12, name: "alu", age: 14 };

const employess = {
    ide: "VS code",
    designation: "developer",
    machine: "mac",
    language: ["html", "css", "js"],
    specification: {
        height: 66,
        weight: 67,
        address: "kumarkhali",
        drink: "water",
        watch: {
            color: "black",
            price: 3000,
            brand: "germin",
        },
    },
};

const { machine, ide } = employess;
const { weight, address } = employess.specification;
// const { brand } = employess.specification.watch;

const [html] = employess.language;
// const { brand } = employess ? .specification ? .watch;

console.log([html]);