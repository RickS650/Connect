//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    ".... UP-SCRUB", ".... UP-MOP", ".... UP-CHEER", ".... UP-TURN",
    "OFFICIAL LANGUAGES OF THE UN-CHINESE", "OFFICIAL LANGUAGES OF THE UN-ENGLISH", "OFFICIAL LANGUAGES OF THE UN-FRENCH", "OFFICIAL LANGUAGES OF THE UN-RUSSIAN",
    "OFFICIAL LANGUAGES OF SWITZERLAND-GERMAN", "OFFICIAL LANGUAGES OF SWITZERLAND-FRENCH", "OFFICIAL LANGUAGES OF SWITZERLAND-ITALIAN", "OFFICIAL LANGUAGES OF SWITZERLAND-ROMANSH",
    "... DOWN-SCRUB", "... DOWN-CLAMP", "... DOWN-HOSE", "... DOWN-CHOP"];

let longCat = ["....UP", "OFFICIAL LANGUAGES OF THE UN", "OFFICIAL LANGUAGES OF SWITZERLAND", "... DOWN"]
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