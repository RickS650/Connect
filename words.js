//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "ROALD DAHL HEROES-CHARLIE", "ROALD DAHL HEROES-MATILDA", "ROALD DAHL HEROES-JAMES", "ROALD DAHL HEROES-GEORGE",
    "A NEW WORD BACKWARDS-THROW", "A NEW WORD BACKWARDS-STRESSED", "A NEW WORD BACKWARDS-REWARD", "A NEW WORD BACKWARDS-DELIVER",
    "SECURE SYNONYMS-FAST", "SECURE SYNONYMS-STRONG", "SECURE SYNONYMS-SAFE", "SECURE SYNONYMS-DEPENDABLE",
    "FAMOUS SIDEKICKS-WATSON", "FAMOUS SIDEKICKS-HASTINGS", "FAMOUS SIDEKICKS-ROBIN", "FAMOUS SIDEKICKS-RON WEASLEY"];

let longCat = ["ROALD DAHL HEROES", "A NEW WORD BACKWARDS", "SECURE SYNONYMS", "FAMOUS SIDEKICKS"]
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