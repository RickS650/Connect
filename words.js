//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "VEG ANAGRAMS-LAKE", "VEG ANAGRAMS-BANE", "VEG ANAGRAMS-APE", "VEG ANAGRAMS-MAY",
    "... ROOM-ESCAPE", "... ROOM-ENGINE", "... ROOM-DRAWING", "... ROOM-BED",
    "US SPACE SHUTTLES-ATLANTIS", "US SPACE SHUTTLES-DISCOVERY", "US SPACE SHUTTLES-ENDEAVOUR", "US SPACE SHUTTLES-COLUMBIA",
    "CLUEDO SUSPECTS-SCARLET", "CLUEDO SUSPECTS-GREEN", "CLUEDO SUSPECTS-PLUM", "CLUEDO SUSPECTS-PEACOCK"
];

let longCat = ["VEG ANAGRAMS", "... ROOM", "US SPACE SHUTTLES", "CLUEDO SUSPECTS"]
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