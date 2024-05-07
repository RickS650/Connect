//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "GODS OF HUNTING-DIANA", "GODS OF HUNTING-ARTEMIS", "GODS OF HUNTING-ORION", "GODS OF HUNTING-CERNUNNOS",
    "GODS OF LOVE-APHRODITE", "GODS OF LOVE-FREYJA", "GODS OF LOVE-OKUNINUSHI", "GODS OF LOVE-ISHTAR",
    "GODS OF WAR-MARS", "GODS OF WAR-ODIN", "GODS OF WAR-ARES", "GODS OF WAR-BELLONA",
    "PLANETS NAMED AFTER GODS-MERCURY", "PLANETS NAMED AFTER GODS-VENUS", "PLANETS NAMED AFTER GODS-JUPITER", "PLANETS NAMED AFTER GODS-SATURN"
];

let longCat = ["GODS OF HUNTING", "GODS OF LOVE", "GODS OF WAR", "PLANETS NAMED AFTER GODS"]
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