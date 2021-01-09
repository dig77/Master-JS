// functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}

const countryOne = describeCountry('Portugal', 11000000, 'Lisbon');
const countryTwo = describeCountry('Spain', 46000000, 'Madrid');
const countryThree = describeCountry('Hawai1', 1400000, 'Honolulu');

// function declarations vs. expressions

function percentageOfWorld1(population) {
    const worldPopulation = 7900000000000;
    return (population / worldPopulation) * 100;
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

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld3(population)
    return `${country} has ${population} people, which is about ${percentage} of the world`
}

const isCountryOne = describePopulation('China', 1441000000);
const isCountryTwo = describePopulation('Portugal', 11000000);

// Introduction to Arrays

const populations = [10000000, 9000000, 200000000, 6000000];

// if(populations.length <= 4) {
//     console.log(`the array has ${populations.length} elements`);
// } else {
//     console.log(`the array has less than 4 elements`);
// } 

const percentages = [];

percentages.push(percentageOfWorld1(populations[0]));
percentages.push(percentageOfWorld1(populations[1]));
percentages.push(percentageOfWorld1(populations[2]));
percentages.push(percentageOfWorld1(populations[3]));

// Basic Array Operations(Methods)

const neighbours = ['Uruguay', 'Bolivia', 'Colombia', 'Peru'];

neighbours.push('Utopia');

neighbours.pop('Utopia');

// if(neighbours === 'Germany') {
//     console.log('Probably is a central European Country')
// } else {
//     console.log('Probably is not a central European Country')
// }

// console.log(neighbours.indexOf('Peru'))

neighbours[3] = 'Republic of Peru'

// Introduction to Objects

// const myCountry = {
//     country: 'Portugal', 
//     capital: 'Lisbon',
//     language: 'Portuguese',
//     population: 10000000,
//     neighbours: ['Spain']
// }

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring country and a capital called ${myCountry.capital}.`)

const updatePopulation = 2000000;

// myCountry.population += increasePopulation;

// console.log(myCountry['population'] -= updatePopulation)

// Object methods

const myCountry = {
    country: 'Portugal',
    capital: 'Lisbon',
    language: 'Portuguese',
    population: 10000000,
    neighbours: ['Spain'],
    describe: function () {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring country and a capital called ${this.capital}.`
    },
    checkIsland: function () {
        console.log(this.neighbours.length);
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}

// console.log(myCountry.checkIsland())
// console.log(myCountry)

// Iteration: The for loop

// for(let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// Looping arrays, breaking and continuing

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]))
}

// console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    const current = listOfNeighbours[i];
    for (let j = 0; j < current.length; j++) {
        console.log('Neighbour: ' + current[j])
    }
}

// the while loop

const percentages3 = [];
let counter = 0;

while(counter < populations.length) {
    percentages3.push(percentageOfWorld1(populations[counter]));
    counter++;
}

console.log(percentages3);