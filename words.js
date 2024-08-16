//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "COUNTRIES WHOSE CAPITAL IS THE SAME-KUWAIT", "COUNTRIES WHOSE CAPITAL IS THE SAME-PANAMA", "COUNTRIES WHOSE CAPITAL IS THE SAME-MEXICO", "COUNTRIES WHOSE CAPITAL IS THE SAME-LUXEMBOURG",
    "SUMMER OLYMPIC CITIES-BEIJING", "SUMMER OLYMPIC CITIES-PARIS", "SUMMER OLYMPIC CITIES-SYDNEY", "SUMMER OLYMPIC CITIES-LOS ANGELES",
    "COUNTRIES OF FORMER YUGOSLAVIA-CROATIA", "COUNTRIES OF FORMER YUGOSLAVIA-SERBIA", "COUNTRIES OF FORMER YUGOSLAVIA-SLOVENIA", "COUNTRIES OF FORMER YUGOSLAVIA-BOSNIA",
    "FICTIONAL BEARS-YOGI", "FICTIONAL BEARS-RUPERT", "FICTIONAL BEARS-BALOO", "FICTIONAL BEARS-FOZZIE"];

let longCat = ["COUNTRIES WHOSE CAPITAL IS THE SAME", "SUMMER OLYMPIC CITIES", "COUNTRIES OF FORMER YUGOSLAVIA", "FICTIONAL BEARS"]
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