//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "BERRIES-GOOSE", "BERRIES-RASP", "BERRIES-BLUE", "BERRIES-BLACK",
    "WORDS THAT END WITH A PART OF THE FACE-POPEYE", "WORDS THAT END WITH A PART OF THE FACE-URCHIN", "WORDS THAT END WITH A PART OF THE FACE-LOWBROW", "WORDS THAT END WITH A PART OF THE FACE-DARTMOUTH",
    "WORDS THAT RHYME WITH ALE-QUAYLE", "WORDS THAT RHYME WITH ALE-BRAILLE", "WORDS THAT RHYME WITH ALE-VEIL", "WORDS THAT RHYME WITH ALE-YALE",
    "OSCAR WINNING DIRECTORS-STONE", "OSCAR WINNING DIRECTORS-FORD", "OSCAR WINNING DIRECTORS-JACKSON", "OSCAR WINNING DIRECTORS-CAMERON"
];

let longCat = ["BERRIES", "WORDS THAT END WITH A PART OF THE FACE", "WORDS THAT RHYME WITH ALE", "OSCAR WINNING DIRECTORS"]
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