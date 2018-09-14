const myHobbies = [
    { name: 'knitting', lengthInYarsAtHobby: 4 },
    { name: 'gardening', lengthInYarsAtHobby: 4 },    
    { name: 'reading', lengthInYarsAtHobby: 20},
    { name: 'jogging', lengthInYarsAtHobby: 1}    
];


function printHobbyInfo(myHobby) {
    console.log(` ${myHobby.name} has been in interest in ${myHobby.lengthInYarsAtHobby} years`)
}

for (const myHobby of myHobbies) {
    printHobbyInfo(myHobby);
}

myHobbies.sort(
    (a,b) => {
        if(a.lengthInYarsAtHobby>b.lengthInYarsAtHobby)
            return 1;
        else if(a.lengthInYarsAtHobby<b.lengthInYarsAtHobby)
            return -1;
        else
            return a.name.toUpperCase()-b.name.toUpperCase();
    }
);
console.log('hobbies after sort by length', myHobbies);

myHobbies.sort(
    (a,b) => {
        return a.name.toUpperCase()-b.name.toUpperCase();
    }
);
console.log('hobbies after sort by name', myHobbies);