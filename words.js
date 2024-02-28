//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "PALINDROMES-AIBOHPHOBIA", "PALINDROMES-RADAR", "PALINDROMES-RACECAR", "PALINDROMES-REPAPER",
    "SAME WORD, OPPOSITE MEANING-FAST", "SAME WORD, OPPOSITE MEANING-SANCTION", "SAME WORD, OPPOSITE MEANING-SCREEN", "SAME WORD, OPPOSITE MEANING-BOLT",
    "WORDS THAT BEGIN WITH A NAME-BULL", "WORDS THAT BEGIN WITH A NAME-LION", "WORDS THAT BEGIN WITH A NAME-RAM", "WORDS THAT BEGIN WITH A NAME-FISH",
    "FAMOUS FOR POTTERY-GERMANY", "FAMOUS FOR POTTERY-JAPAN", "FAMOUS FOR POTTERY-CHINA", "FAMOUS FOR POTTERY-UK"
];

let longCat = ["PALINDROMES", "SAME WORD, OPPOSITE MEANING", "ASTROLOGICAL ANIMALS", "FAMOUS FOR POTTERY"]
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