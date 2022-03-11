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

const brands = products.map((product) => product.brand);

console.log(brands);

const prices = products.map((product) => product.price);

products.forEach((product) => console.log(product));

products.forEach((products) => {});

//filter
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);

const specificName = product.filter((pd) => pd.name.includes("n"));
console.log(specificName);

//4. find

const special = products.find(p.name.includes("n"));
console.log(special);