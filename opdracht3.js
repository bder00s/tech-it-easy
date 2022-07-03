//opdracht 3a
const tvBrands = inventory.map((inventory) => {
    return " " + inventory.brand + " ";
});
console.log(tvBrands);
///
const sellingBrands = document.getElementById("brands");
sellingBrands.textContent = tvBrands;

//opdracht 3b

// function getTvObject(arr) {
//     const getTv = inventory.map((entry) => {
//         return inventory.map(entry);
// });
// const output = getTvObject(inventory);
// console.log(output)}

function getTv(arr) {
    return arr.map((entry) => {
        return entry;
    });
}
const output = getTv(inventory);
console.log(output);
