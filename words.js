//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "TYPES OF WIND-BORA", "TYPES OF WIND-MISTRAL", "TYPES OF WIND-LEVANTER", "TYPES OF WIND-SIROCCO",
    "DROP THE S TO MAKE A NEW WORD-SWALLOW", "DROP THE S TO MAKE A NEW WORD-SURGE", "DROP THE S TO MAKE A NEW WORD-SPIKE", "DROP THE S TO MAKE A NEW WORD-SNAIL",
    "ONE FOR SORROW TWO FOR .....-SORROW", "ONE FOR SORROW TWO FOR .....-JOY", "ONE FOR SORROW TWO FOR .....-GIRL", "ONE FOR SORROW TWO FOR .....-BOY",
    "THINGS WITH SAILS-WINDMILL", "THINGS WITH SAILS-YACHT", "THINGS WITH SAILS-WIND TURBINE", "THINGS WITH SAILS-PARAGLIDER"
];

let longCat = ["TYPES OF WIND", "DROP THE S TO MAKE A NEW WORD", "ONE FOR SORROW TWO FOR .....", "THINGS WITH SAILS"]
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