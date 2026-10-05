const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    for(let person of people){
        person.age = (person.yearOfDeath != undefined ? person.yearOfDeath : currentYear) - person.yearOfBirth;
    }
    people.sort((a, b) => b.age - a.age);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
