//This file loads all the words into the arrays and makes them Uppercased
const temp1 = [
    "BOARD GAMES-MONOPLY", "BOARD GAMES-CLUEDO", "BOARD GAMES-CHESS", "BOARD GAMES-RISK",
    "EFFORT TO REACH A GOAL-SCRABBLE", "EFFORT TO REACH A GOAL-SCUFFLE", "EFFORT TO REACH A GOAL-SKIRMISH", "EFFORT TO REACH A GOAL-BATTLE",
    "BINGO CALLS-GARDEN GATE", "BINGO CALLS-DANCING QUEEN", "BINGO CALLS-ROYAL SALUTE", "BINGO CALLS-SNAKES ALIVE",
    "MAGAZINES-RED", "MAGAZINES-VOGUE", "MAGAZINES-COSMOPOLITAN", "MAGAZINES-ELLE"];

let longCat = ["BOARD GAMES", "EFFORT TO REACH A GOAL", "BINGO CALLS", "MAGAZINES"]
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