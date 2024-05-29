//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "TYPES OF BEAN-BROAD", "TYPES OF BEAN-FRENCH", "TYPES OF BEAN-KIDNEY", "TYPES OF BEAN-RUNNER",
    "DOWN...-PLAY", "DOWN...-BEAT", "DOWN...-CAST", "DOWN...-FALL",
    "KITCHEN TOOLS-MADELINE", "KITCHEN TOOLS-SIEVE", "KITCHEN TOOLS-WHISK", "KITCHEN TOOLS-TOASTER",
    "OLD ENGLISH MEASUREMENTS-HAND", "OLD ENGLISH MEASUREMENTS-ELL", "OLD ENGLISH MEASUREMENTS-ROD", "OLD ENGLISH MEASUREMENTS-NAIL"];

let longCat = ["TYPES OF BEAN", "DOWN...", "KITCHEN TOOLS", "OLD ENGLISH MEASUREMENTS"]
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