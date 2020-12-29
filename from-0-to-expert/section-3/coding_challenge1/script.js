const calcAvg = (value1,value2,value3) => (value1 + value2 + value3) / 3

// Data 1
/*
const dolphinsAvg = calcAvg(44,23,71)
const koalasAvg = calcAvg(65,54,49)
*/

// Data 2
const dolphinsAvg = calcAvg(85,54,41)
const koalasAvg = calcAvg(23,34,27)


function checkWinner(dolphinsAvg,koalasAvg) {
    if(dolphinsAvg >= koalasAvg *2) {
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`)
    } else if (koalasAvg >= dolphinsAvg * 2) {
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`)
    } else {
        console.log(`No one wins. No time double the other´s score. Final score is (${koalasAvg} vs. ${dolphinsAvg})`)
    }
}

checkWinner(dolphinsAvg,koalasAvg)