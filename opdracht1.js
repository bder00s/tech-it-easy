//opdracht 1A

//
// function tvModels(arr) {
//     return arr.map((entry) => {
//         return entry.brand;
//     });
// }
// const output = tvModels(inventory);
// console.log(output);

const newArray = inventory.map((entry) => {
    return entry.brand
})
console.log(newArray);

//opdracht 1B

const soldOut = inventory.filter((stock ) => {
    return stock.originalStock <= stock.sold;
});
console.log(soldOut);


//opdracht 1C

const ambiTV = inventory.filter((gotAmbilight) => {
    return gotAmbilight.options.ambiLight === true;
});
console.log(ambiTV);


//opdracht 1D

inventory.sort((a,b) => {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;

});
console.log(inventory);

