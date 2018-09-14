let myHobbies = [{name: 'Knitting',
                 lengthInYearsAtHobby: 15},
                {name: 'Cross-stiching',
                lengthInYearsAtHobby: 10}
];

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} is my hobby for ${hobby.lengthInYearsAtHobby}  years
                 `)
}

myHobbies.sort();
console.log(myHobbies);


printHobbyInfo(myHobbies[0]);
printHobbyInfo(myHobbies[1]);

console.log('****');

for (const hobby of myHobbies) {
    printHobbyInfo(hobby);
}