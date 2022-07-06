//opdracht 4a

function tvDetails([arr]) {
    return inventory[arr].brand + " | " + inventory[arr].type + " | " + inventory[arr].name;
}

const tvTwo = tvDetails([1]);
console.log(tvTwo);

//opdracht 4b:

function tvPrice([arr]) {
    return "€" + inventory[arr].price + ",-";
}

const tvTwoPrice = tvPrice([1]);
console.log(tvTwoPrice);

//Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//Hier ben ik echt 4 uur bezig mee geweest, overal hulp gevraagd maar ik kwam er echt niet meer uit!
function tvSizes([arr]) {
    let sizeInch = 0;
    let sizeCm = 0;
    for (let i = 0; i < inventory[arr].availableSizes.length; i++) {
        sizeInch[i] = inventory[i].availableSizes[i];
        sizeCm[i] = sizeInch[i] * 2.54;

        const sentence = sizeInch[i] + " inches | " + "(" + sizeCm[i] + "cm)";
    }
    return sentence;
}

const tvOneSizes = tvSizes([5]);
console.log(tvOneSizes);


//Opdracht 4d
function getTvInfo([arr]) {
    return tvDetails([arr]) + " | " + tvPrice([arr]) + " | " + tvSizes([arr]);
}

const tvInfo = getTvInfo([1]);
console.log(tvInfo);

//
// //Opdracht 4e
// Niet afgekregen
// function allInfo([arr]) {
//     function getTvInfo([arr]) {
//         const output = inventory.map((entry) => {
//         });
//         return output
//
//     }
// }











