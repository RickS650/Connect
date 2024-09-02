//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "PREMIER LEAGUE TEAM NICKNAMES-PENSIONERS", "PREMIER LEAGUE TEAM NICKNAMES-EAGLES", "PREMIER LEAGUE TEAM NICKNAMES-CHERRIES", "PREMIER LEAGUE TEAM NICKNAMES-FOXES",
    "RUGBY LEAGUE TEAM NICKNAMES-ROBINS", "RUGBY LEAGUE TEAM NICKNAMES-WOLVES", "RUGBY LEAGUE TEAM NICKNAMES-RHINOS", "RUGBY LEAGUE TEAM NICKNAMES-TIGERS",
    "EXTINCT ANIMALS-QUAGGAS", "EXTINCT ANIMALS-BLACK RHINOS", "EXTINCT ANIMALS-GREAT AUKS", "EXTINCT ANIMALS-AUROCHS",
    "NEARLY EXTINCT ANIMALS-HIROLAS", "NEARLY EXTINCT ANIMALS-PANGOLINS", "NEARLY EXTINCT ANIMALS-WOMBATS", "NEARLY EXTINCT ANIMALS-SAOLAS"];

let longCat = ["PREMIER LEAGUE TEAM NICKNAMES", "RUGBY LEAGUE TEAM NICKNAMES", "EXTINCT ANIMALS", "NEARLY EXTINCT ANIMALS"]
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