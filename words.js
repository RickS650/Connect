//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "THINGS FOUND IN A RESTAURANT-MENU", "THINGS FOUND IN A RESTAURANT-GLASSES", "THINGS FOUND IN A RESTAURANT-CUTLERY", "THINGS FOUND IN A RESTAURANT-WAITERS",
    "SEVEN ....-DWARF", "SEVEN ....-SEA", "SEVEN ....-SIN", "SEVEN ....-WONDER",
    "7 DWARFS MINUS THE LAST LETTER-CHANEL", "7 DWARFS MINUS THE LAST LETTER-LOUIS VUITTON", "7 DWARFS MINUS THE LAST LETTER-LACROIX", "7 DWARFS MINUS THE LAST LETTER-DIOR",
    "COVERINGS-COAT", "COVERINGS-FILM", "COVERINGS-LAYER", "COVERINGS-SKIN"];

let longCat = ["THINGS FOUND IN A RESTAURANT", "SEVEN ....", "7 DWARFS MINUS THE LAST LETTER", "COVERINGS"]
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