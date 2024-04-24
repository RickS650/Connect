//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "CHAIRS-DINING", "CHAIRS-HIGH", "CHAIRS-DECK", "CHAIRS-PUSH",
    "ON YOUR ....-MARKS", "ON YOUR ....-OWN", "ON YOUR ....-TOES", "ON YOUR ....-UPPERS",
    "PARTS OF A SHOE-TONGUE", "PARTS OF A SHOE-SOLE", "PARTS OF A SHOE-LACE", "PARTS OF A SHOE-EYELET",
    "WEEDDING ANNIVERSARY-LEATHER", "WEEDDING ANNIVERSARY-PAPER", "WEEDDING ANNIVERSARY-IVORY", "WEEDDING ANNIVERSARY-CHINA"
];

let longCat = ["CHAIRS", "ON YOUR ....", "PARTS OF A SHOE", "WEEDDING ANNIVERSARY"]
const catsWords = temp1.map(function (e) {
    return e.toUpperCase()
});

longCat = longCat.map(function (e) {
    return e.toUpperCase()
});
let shortCat = [];

shortCat[0] = catsWords[0].split('-')[0];
shortCat[1] = catsWords[4].split('-')[0];
shortCat[2] = catsWords[8].split('-')[0];
shortCat[3] = catsWords[12].split('-')[0];