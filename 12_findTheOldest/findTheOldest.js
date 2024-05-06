const findTheOldest = function(arr) {
    let oldestPersonAge = 0;

    return arr.reduce((oldestPerson, person) => {
        let personAge;
        if(person.yearOfDeath === undefined) {
            personAge = (new Date).getFullYear() - person.yearOfBirth
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }


        if(oldestPerson === undefined || personAge > oldestPersonAge) {
            oldestPersonAge = personAge;
            return person;
        } else {
            return oldestPerson;
        }
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
