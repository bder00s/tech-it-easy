//opdracht 4

//Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

function tvDetails([arr]) {
   return inventory[arr].brand + ", " + inventory[arr].type + ", " + inventory[arr].name;
}

const tvOne = tvDetails([3]);
console.log(tvOne);

//opdracht 4b:









