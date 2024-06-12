//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "PEDESTRIAN CROSSING-PELICAN", "PEDESTRIAN CROSSING-ZEBRA", "PEDESTRIAN CROSSING-PUFFIN", "PEDESTRIAN CROSSING-TOUCAN",
    "SEABIRDS-PETREL", "SEABIRDS-TERN", "SEABIRDS-SHEARWATER", "SEABIRDS-CORMORANT",
    "BRIDGE TERMS-RUFF", "BRIDGE TERMS-VULNERABLE", "BRIDGE TERMS-DUMMY", "BRIDGE TERMS-YARBOROUGH",
    "SYNONYMS OF NOTHING-LOVE", "SYNONYMS OF NOTHING-NIL", "SYNONYMS OF NOTHING-NOUGHT", "SYNONYMS OF NOTHING-ZIP"];

let longCat = ["PEDESTRIAN CROSSING", "SEABIRDS", "BRIDGE TERMS", "SYNONYMS OF NOTHING"]
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