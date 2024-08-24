const findTheOldest = function(people) {
    return people.slice().sort((a, b) => {
        const currentDate = new Date().getFullYear();
        let aBirth = a.yearOfBirth ?? currentDate;
        let aDeath = a.yearOfDeath ?? currentDate;

        let bBirth = b.yearOfBirth ?? currentDate;
        let bDeath = b.yearOfDeath ?? currentDate;
        
        let ageA = aDeath - aBirth;
        let ageB = bDeath - bBirth;
        return ageB - ageA;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
