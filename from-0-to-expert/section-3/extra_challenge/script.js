const currentYear = 2021;

const jonas = {
    birthYear: 1977,
    firstName: 'Jonas',
    lastName: 'Pistolas',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    location: 'Portugal', 
    calAge: function() {
        this.Age = currentYear - this.birthYear;
        return this.Age;
    },
    hasDriversLicense: true
}



console.log(`${jonas.firstName} is a ${jonas.calAge()} years old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver´s license`);