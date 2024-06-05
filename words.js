//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "BREEDS OF DOG-BASENJI", "BREEDS OF DOG-BORZOI", "BREEDS OF DOG-KELPI", "BREEDS OF DOG-AKITA",
    "FAMOUS HORSES-COPENHAGEN", "FAMOUS HORSES-MARENGO", "FAMOUS HORSES-BUCEPHALUS", "FAMOUS HORSES-SEFTON",
    "NATO ALPHABET CODES-MIKE", "NATO ALPHABET CODES-CHARLIE", "NATO ALPHABET CODES-OSCAR", "NATO ALPHABET CODES-JULIET",
    "TYPES OF SKIRT-PENCIL", "TYPES OF SKIRT-MINI", "TYPES OF SKIRT-GODET", "TYPES OF SKIRT-TULIP"];

let longCat = ["BREEDS OF DOG", "FAMOUS HORSES", "NATO ALPHABET CODES", "TYPES OF SKIRT"]
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