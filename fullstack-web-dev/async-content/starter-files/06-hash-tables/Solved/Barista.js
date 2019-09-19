// In this exercise you will be creating two ES6 classes, Barista and Manager, which extends and inherits from Barista
// Using the comments, fill in the missing items for each class
// Don't forget to test your work as you go
// Once you've finished, review the Solved solution and compare your code
// If you get stuck, don't just refer to the solution, try to use other resources like Google and StackOverflow.

// Create a class constructor named Barista
class Barista {
    // Create a constructor that takes the properties 'firstName', 'lastName', 'age', and 'coffeeSkillLevel' and set them
    constructor(firstName, lastName, age, coffeeSkillLevel) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.coffeeSkillLevel = coffeeSkillLevel;
    }

    // create getters and setters for each constructor item

    // firstName
    getFirstName() {
        return this.firstName;
    }
    setFirstName(value) {
        this.firstName = value;
    }

    // lastName
    getLastName() {
        return this.firstName;
    }
    setLastName(value) {
        this.firstName = value;
    }

    // age
    getAge() {
        return this.firstName;
    }
    setAge(value) {
        this.firstName = value;
    }

    // coffee skill level
    getCoffeeSkillLevel() {
        return this.coffeeSkillLevel;
    }
    setCoffeeSkillLevel(value) {
        this.coffeeSkillLevel = value;
    }
}

// Create an instance of the Barista class, give it the four original properties
let abdul = new Barista('Abdul', 'Salis', 31, 5);

// Call the getCoffeeSkillLevel method
abdul.getCoffeeSkillLevel();

// Your barista went through some training, increase their skill level by 1
let skillLevel = abdul.getCoffeeSkillLevel;
skillLevel++;
abdul.setCoffeeSkillLevel(skillLevel);

// Call the getEmotion method ... did your new emotion get console logged?
abdul.getCoffeeSkillLevel();

module.exports = Barista;
