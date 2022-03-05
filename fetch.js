console.log(222222);
console.log(1111111);
console.log(33333333);

setTimeOut(() => {
    console.log("aaaaaa");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

console.log(55555555);
console.log(66666666);