//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "RELATED TO THE WORD SHIP-SHAPE", "RELATED TO THE WORD SHIP-TIGHT", "RELATED TO THE WORD SHIP-JUMP", "RELATED TO THE WORD SHIP-SINKING",
    "......  METER-KILO", "......  METER-DYNAMO", "......  METER-TACHO", "......  METER-PHOTO",
    "WORDS THAT SPELL AN ANIMAL BACKWARDS-DEER", "WORDS THAT SPELL AN ANIMAL BACKWARDS-GOD", "WORDS THAT SPELL AN ANIMAL BACKWARDS-FLOW", "WORDS THAT SPELL AN ANIMAL BACKWARDS-TAR",
    "12 DAYS OF XMAS-GEESE", "12 DAYS OF XMAS-SWANS", "12 DAYS OF XMAS-PIPERS", "12 DAYS OF XMAS-RINGS"
];

let longCat = ["RELATED TO THE WORD SHIP", "......  METER", "WORDS THAT SPELL AN ANIMAL BACKWARDS", "12 DAYS OF XMAS"]
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