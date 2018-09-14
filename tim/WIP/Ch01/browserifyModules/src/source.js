const printInfo = require('./printHobbies');
// const _ = require('lodash');
const returnHobbiesHTML = require('./htmlHobbies');

const hobbies = [
    { name: 'volleyball', lengthInYearsAtHobby: 20 },
    { name: 'cooking', lengthInYearsAtHobby: 5},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

for (const hobby of hobbies) {
    printInfo(hobby);
}

// function mostRecentHobby(){
//     return _.minBy(hobbies, hobby => hobby.lengthInYearsAtHobby);
// }

// printInfo(mostRecentHobby());
window.returnHobbiesHTML = ()=>returnHobbiesHTML(hobbies);
// document.getElementById("hobbiesInfo").innerHTML=returnHobbiesHTML(hobbies);