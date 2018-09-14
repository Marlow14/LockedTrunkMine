function htmlHobbies(hobbies) {
    let str = '';
    for (let i = 0; i < hobbies.length; i++) {
        str += `<li>${hobbies[i].name}</li>`;
    }

    return str;
}

module.exports = htmlHobbies;