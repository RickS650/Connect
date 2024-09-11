//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "AMERICAN FASHION HOUSES-CALVIN KLEIN", "AMERICAN FASHION HOUSES-VERA WANG", "AMERICAN FASHION HOUSES-MICHAEL KORS", "AMERICAN FASHION HOUSES-COACH",
    "BRITISH FASHION HOUSES-JOHN GALLIANO", "BRITISH FASHION HOUSES-GARETH PUGH", "BRITISH FASHION HOUSES-ALEXANDER McQUEEN", "BRITISH FASHION HOUSES-VIVIENNE WESTWOOD",
    "FRENCH FASHION HOUSES-CHANEL", "FRENCH FASHION HOUSES-LOUIS VUITTON", "FRENCH FASHION HOUSES-LACROIX", "FRENCH FASHION HOUSES-DIOR",
    "ITALIAN FASHION HOUSES-ARMANI", "ITALIAN FASHION HOUSES-DIESEL", "ITALIAN FASHION HOUSES-DOLCE & GABBANA", "ITALIAN FASHION HOUSES-GUCCI"];

let longCat = ["AMERICAN FASHION HOUSES", "BRITISH FASHION HOUSES", "FRENCH FASHION HOUSES", "ITALIAN FASHION HOUSES"]
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