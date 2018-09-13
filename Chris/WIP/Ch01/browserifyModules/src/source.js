const printInfo = require('./printHobbies');
var _ = require('lodash/core');

    const hobbies = [
        { name: 'volleyball', lengthInYearsAtHobby: 20 },
        { name: 'cooking', lengthInYearsAtHobby: 5},
        { name: 'swimming', lengthInYearsAtHobby: 11}
    ];

    for (const hobby of hobbies) {
        printInfo(hobby);
        
    }

    var lowest = _.min(hobbies.map(function(retVal){
        return ` The newest hobby is >>> ${retVal.name} for ${retVal.lengthInYearsAtHobby} years `;
    }));
    console.log(lowest);