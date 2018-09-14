let myHobbies = [
    {name:'hunting',lengthInYearsAtHobby:3},
    {name:'fishing',lengthInYearsAtHobby:14},
    {name:'bowling',lengthInYearsAtHobby:3},
    {name:'boating',lengthInYearsAtHobby:2},
];

function printHobbyInfo(hobby) {
    console.log(`${hobby.name} has been an interest for ${hobby.lengthInYearsAtHobby} years`);
}

console.log('Unsorted');
myHobbies.forEach(printHobbyInfo);

myHobbies.sort((a,b)=>{
    if (a.lengthInYearsAtHobby != b.lengthInYearsAtHobby) {
        return a.lengthInYearsAtHobby - b.lengthInYearsAtHobby;
    }
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
});

console.log('Sorted');
myHobbies.forEach(printHobbyInfo);
