const findTheOldest = function(people) {
    let this_year = new Date().getFullYear();
    let x = people.reduce(function(oldest, person){
        console.log(`year of death: ${person.yearOfDeath}`)
        if (oldest.yearOfDeath == undefined){
            oldest.yearOfDeath = this_year;
        }
        if (person.yearOfDeath == undefined){
            person.yearOfDeath = this_year;
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        
        if (age > (oldest.yearOfDeath - oldest.yearOfBirth))
        { oldest = person;}
        return oldest;
        
    });
    
    return x;

};

// Do not edit below this line
module.exports = findTheOldest;
