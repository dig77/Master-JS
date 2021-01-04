const person1 = {
    firstName: 'John',
    familyName: 'Smith',
    mass: 202,
    height: 1.95,
    calcBMI: function() {
       this.bmi = this.mass / this.height ** 2;
       return this.bmi;
    }
}

const person2 = {
    firstName: 'Mark',
    familyName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
     }
}

person1.calcBMI();
person2.calcBMI();

if(person1.bmi > person2.bmi) {
    console.log(`${person1.firstName} ${person1.familyName}'s BMI (${person1.bmi}) is higher than ${person2.firstName} ${person2.familyName}'s BMI (${person2.bmi})`);
} else {
    console.log(`${person2.firstName} ${person2.familyName}'s BMI (${person2.bmi}) is higher than ${person1.firstName} ${person1.familyName}'s BMI (${person1.bmi})`);
}