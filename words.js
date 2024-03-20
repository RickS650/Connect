//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "FOODS NAMED AFTER UK PLACES-KENDAL", "FOODS NAMED AFTER UK PLACES-CHELSEA", "FOODS NAMED AFTER UK PLACES-YORKSHIRE", "FOODS NAMED AFTER UK PLACES-CUMBERLAND",
    "CAKES-DUNDEE", "CAKES-BATTENBERG", "CAKES-FRUIT", "CAKES-GENOA",
    "A WORD WITH NO REPEATED LETTERS-LUMBERJACK", "A WORD WITH NO REPEATED LETTERS-TRAMPOLINE", "A WORD WITH NO REPEATED LETTERS-BINOCULARS", "A WORD WITH NO REPEATED LETTERS-EARTHLINGS",
    "LETTER HOMOPHONES-WHY", "LETTER HOMOPHONES-SEE", "LETTER HOMOPHONES-TEA", "LETTER HOMOPHONES-CUE"
];

let longCat = ["FOODS NAMED AFTER UK PLACES", "CAKES", "A WORD WITH NO REPEATED LETTERS", "LETTER HOMOPHONES"]
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