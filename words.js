//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "DEEPEST, HIGHEST, SMALLEST , LARGEST LAKES-BAIKAL", "DEEPEST, HIGHEST, SMALLEST , LARGEST LAKES-TITICACA", "DEEPEST, HIGHEST, SMALLEST , LARGEST LAKES-UBSU NUR", "DEEPEST, HIGHEST, SMALLEST , LARGEST LAKES-CASPIAN",
    "ROALD DAHL HEROES-CHARLIE", "ROALD DAHL HEROES-DANNY", "ROALD DAHL HEROES-JAMES", "ROALD DAHL HEROES-MATILDA",
    "FORMER US PRESIDENTS FIRST NAMES-JIMMY", "FORMER US PRESIDENTS FIRST NAMES-GEORGE", "FORMER US PRESIDENTS FIRST NAMES-JOHN", "FORMER US PRESIDENTS FIRST NAMES-LYNDON",
    "FORMER UK PRIME MINISTERS NAMES-LIZ", "FORMER UK PRIME MINISTERS NAMES-DAVID", "FORMER UK PRIME MINISTERS NAMES-GORDON", "FORMER UK PRIME MINISTERS NAMES-TONY"
];

let longCat = ["DEEPEST, HIGHEST, SMALLEST , LARGEST LAKES", "ROALD DAHL HEROES", "FORMER US PRESIDENTS FIRST NAMES", "FORMER UK PRIME MINISTERS NAMES"]
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