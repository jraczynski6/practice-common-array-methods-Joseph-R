// task 1
let orders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
];


// task 2
console.log(orders[0].length);
console.log(orders[1].length);

// task 3

console.log(orders[0][0], orders[1][0]);
console.log(orders[0][1], orders[1][1]);
console.log(orders[0][2], orders[1][2]);

// task 4 

let rowIndex = 0;
let itemIndex = 1;

let selectedItem = orders[rowIndex][itemIndex];

console.log(selectedItem);

//task 5

for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < orders[i].length; j++) {
    console.log(orders[i][j]);
    }
}

// task 6 

orders[0].push("Flat White");

console.log(orders[0].length);

rowIndex = 0;
itemIndex = 3;

console.log(orders[rowIndex][itemIndex]);