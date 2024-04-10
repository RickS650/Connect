//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "....UP-MASH", "....UP-WASH", "....UP-COCK", "....UP-CLEAN",
    "POTATO DISHES-DUCHESS", "POTATO DISHES-CHIPS", "POTATO DISHES-ROSTI", "POTATO DISHES-PARMENTIER",
    "WORDS AMERICANS MISSPELL-COLOUR", "WORDS AMERICANS MISSPELL-PLOUGH", "WORDS AMERICANS MISSPELL-CENTRE", "WORDS AMERICANS MISSPELL-GREY",
    "NOISES-RACKET", "NOISES-DIN", "NOISES-TURMOIL", "NOISES-CLAMOUR"
];

let longCat = ["....UP", "POTATO DISHES", "WORDS AMERICANS MISSPELL", "NOISES"]
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