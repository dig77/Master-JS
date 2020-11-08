const country = 'Portugal'
const continent = 'Europe'
const population = 11000000

console.log(`${country} is located in ${continent} and has a population of ${population}`)

const isIsland = false
const language = 'portuguese'

console.log(typeof isIsland, typeof population, typeof country, typeof language) 

const splitPopulation = population / 2

console.log(splitPopulation)

const increasePopulation = population + 1

console.log(increasePopulation)

const populationFinland = 6000000

const morePopulation = population > populationFinland

console.log(morePopulation)

const averagePopulation = 33000000

const testAveragePopulation = population > averagePopulation

console.log(testAveragePopulation)

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`

console.log(description)

if (testAveragePopulation) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`)
}

'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; //  23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143

console.log(5 + 6 + '4' + 9 - 4 - 2)

// const numNeighbours = prompt('How many neighbour countries does your country have?')

// if (Number(numNeighbours) === 1) {
//     console.log('Only one border')
// } else if (Number(numNeighbours) > 1){
//     console.log('More than one border')
// } else {
//     console.log('No Borders')
// }

if ( (language === 'english') && (population < 50000000) && !isIsland) {
    console.log('You should live in Portugal!!!')
} else {
    console.log('Portugal does not meet your criteria...')
}

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place in number of native speakers')
        break
    case 'hindi':
        console.log('Number 4')
        break
    case 'arabic':
        console.log('5th most spoken language')
        break
    default:
        console.log('Great language too')
}

console.log(`Portugal's population is ${population > averagePopulation ? 'above' : 'below'} average`)


