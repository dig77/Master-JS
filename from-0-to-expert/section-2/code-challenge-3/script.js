
const averageScoreKoalas = (88 + 91 + 110) / 3;
const averageScoreDolphins = (96 + 108 + 89) / 3
const minScore = 100

if (averageScoreKoalas > averageScoreDolphins) {
    console.log(`Koalas are the winners. they´ve won with an average score of ${averageScoreKoalas} vs ${averageScoreDolphins}`)
} else if (averageScoreKoalas === averageScoreDolphins) {
    console.log(`There´s no winner. Both teams have drawn. ${averageScoreKoalas} vs ${averageScoreDolphins}`)
} else {
    console.log(`Dolphins are the winners. they´ve won with an average score of ${averageScoreDolphins} vs ${averageScoreKoalas}`)
}


/*
// BONUS 1
const scoreKoalas1 = 109
const scoreKoalas2 = 95
const scoreKoalas3 = 123

const scoreDolphins1 = 97
const scoreDolphins2 = 112
const scoreDolphins3 = 101

const averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
const averageScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const minScore = 100

console.log((scoreKoalas1 >= minScore || scoreKoalas2 >= minScore || scoreKoalas3 >= minScore))

if (averageScoreKoalas > averageScoreDolphins && (scoreKoalas1 >= minScore || scoreKoalas2 >= minScore || scoreKoalas3 >= minScore)) {
    console.log(`Koalas are the winners. they´ve won with an average score of ${averageScoreKoalas} vs ${averageScoreDolphins} and they have a score higher than ${minScore}`)
} else if (averageScoreDolphins > averageScoreKoalas && (scoreDolphins1 >= minScore || scoreDolphins2 >= minScore || scoreDolphins3 >= minScore)) {
    console.log(`Dolphins are the winners. they´ve won with an average score of ${averageScoreDolphins} vs ${averageScoreKoalas} and they have a score higher than ${minScore}`)
} else {
    console.log(`No team reached a minimum score of ${minScore}`)
}


// BONUS 2
const scoreKoalas1 = 109
const scoreKoalas2 = 95
const scoreKoalas3 = 106

const scoreDolphins1 = 97
const scoreDolphins2 = 112
const scoreDolphins3 = 101

const averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
const averageScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const minScore = 100


if (averageScoreKoalas > averageScoreDolphins && (scoreKoalas1 >= minScore || scoreKoalas2 >= minScore || scoreKoalas3 >= minScore)) {
    console.log(`Koalas are the winners. they´ve won with an average score of ${averageScoreKoalas} vs ${averageScoreDolphins} and they have a score higher than ${minScore}`)
} else if (averageScoreDolphins > averageScoreKoalas && (scoreDolphins1 >= minScore || scoreDolphins2 >= minScore || scoreDolphins3 >= minScore)) {
    console.log(`Dolphins are the winners. they´ve won with an average score of ${averageScoreDolphins} vs ${averageScoreKoalas} and they have a score higher than ${minScore}`)
} else if (averageScoreKoalas === averageScoreDolphins && (scoreKoalas1 >= minScore || scoreKoalas2 >= minScore || scoreKoalas3 >= minScore) && (scoreDolphins1 >= minScore || scoreDolphins2 >= minScore || scoreDolphins3 >= minScore) ) {
    console.log(`Both teams have drawn. Koalas have scored ${averageScoreKoalas} vs ${averageScoreDolphins} and both teams have a minimum score of ${minScore}`)
}
*/




