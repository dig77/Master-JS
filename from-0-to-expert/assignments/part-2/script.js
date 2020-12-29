// functions

function describeCountry(country,population,capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}

const countryOne = describeCountry('Portugal', 11000000, 'Lisbon')
const countryTwo = describeCountry('Spain',46000000, 'Madrid')
const countryThree = describeCountry('Hawai1',1400000,'Honolulu')

// function declarations vs. expressions

function percentageOfWorld1 (population) {
    const worldPopulation = 7900000000000
    return (population / worldPopulation) * 100
}

const China = percentageOfWorld1(1441000000000)


const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900000000000
    return (population / worldPopulation) * 100
}

const Portugal = percentageOfWorld2(11000000)
const Spain = percentageOfWorld2(46000000)
const Hawaii = percentageOfWorld2(1400000)

// arrow functions

const worldPopulation = 7900000000
const percentageOfWorld3 = population => (population / worldPopulation) * 100

const popPortuga = percentageOfWorld3(11000000)
const popChina = percentageOfWorld3(1441000000)

// functions calling other functions

const describePopulation = function (country,population) {
    const percentage = percentageOfWorld3(population)
    return `${country} has ${population} people, which is about ${percentage} of the world`
}

const isCountryOne = describePopulation('China',1441000000)
const isCountryTwo = describePopulation('Portugal',11000000)

console.log(isCountryTwo)

