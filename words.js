//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "CITIES THAT HAVE CHANGED THEIR NAME-ISTANBUL", "CITIES THAT HAVE CHANGED THEIR NAME-MUMBAI", "CITIES THAT HAVE CHANGED THEIR NAME-NEW YORK", "CITIES THAT HAVE CHANGED THEIR NAME-TORONTO",
    "CAT BREEDS-BENGAL", "CAT BREEDS-MANX", "CAT BREEDS-NORWEGIAN FOREST", "CAT BREEDS-SCOTTISH FOLD",
    "MUSCLES IN THE HUMAN BODY-OCCIPITALIS", "MUSCLES IN THE HUMAN BODY-RECTUS", "MUSCLES IN THE HUMAN BODY-OBLIQUE", "MUSCLES IN THE HUMAN BODY-MENTALIS",
    "GEOMETRIC ANGLE NAMES-ACUTE", "GEOMETRIC ANGLE NAMES-RIGHT", "GEOMETRIC ANGLE NAMES-OBTUSE", "GEOMETRIC ANGLE NAMES-REFLEX"
];

let longCat = ["CITIES THAT HAVE CHANGED THEIR NAME", "CAT BREEDS", "MUSCLES IN THE HUMAN BODY", "GEOMETRIC ANGLE NAMES"]
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