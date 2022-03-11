//1. JSON => Stingify parse

const student = {
    name: "Salib Khan",
    age: 32,
    movies: ["king", "Dhakar Mastna"],
};

const studentJSON = JSON.stringify(student);

// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. Fetch

fetch("url")
    .then((res) => res.json())
    .then((data) => console.log(data));

//keys , values
const keys = Object.keys(student);
const values = Object.values(student);

//for
const numbers = [23, 32, 45, 23, 53];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

//for of on array like object

//loop on an object using for in

//add or remove from an array
const products = [{
        name: "laptop",
        price: 32000,
        brand: "lenovo",
        color: "silver",
    },
    {
        name: "phone",
        price: 7000,
        brand: "iphone",
        color: "golden",
    },
    {
        name: "watch",
        price: 3000,
        brand: "casio",
        color: "yellow",
    },
    {
        name: "sunglass",
        price: 300,
        brand: "ribon",
        color: "black",
    },
    {
        name: "Camers",
        price: 9000,
        brand: "canon",
        color: "gray",
    },
];

const newProduct = { name: "webcam", price: 700, brand: "lal" };

//copy products array and then add NewProduct :

const newProduct2 = [...products, newProduct];

//Creat a new array without one specific item
//remove phone means create a new array witout the phone;
const remaining = products.filter((p) => p.name !== "phone");