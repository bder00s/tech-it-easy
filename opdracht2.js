//opdracht 2A

let outcomeTvSold = 0;

for (let i = 0; i < inventory.length; i++) {
    outcomeTvSold = outcomeTvSold + inventory[i].sold;

}
console.log(outcomeTvSold);

//opdracht 2B

const amount = document.getElementById("soldtvs");
amount.textContent = outcomeTvSold;

//opdracht 2C
let outcomeBoughtTv = 0;
for (let i = 0; i < inventory.length; i++) {
    outcomeBoughtTv = outcomeBoughtTv + inventory[i].originalStock;
}
console.log(outcomeBoughtTv);

//opdracht 2D

const amountBought = document.getElementById("boughttvs");
amountBought.textContent = outcomeBoughtTv;

//opdracht 2E
let needToBeSold = 0;
for (let i = 0; i < inventory.length; i++) {
 needToBeSold = outcomeBoughtTv - outcomeTvSold;
}
console.log(needToBeSold);

const amountGetRidOf = document.getElementById("need-to-be-sold");
amountGetRidOf.textContent = needToBeSold;