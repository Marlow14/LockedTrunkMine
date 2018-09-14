const Promise = require("bluebird");

const fs = Promise.promisifyAll(require("fs"));

Promise.try(()=>{
    return fs.readFileAsync('hobbies.json');
}).then((data)=>{
    let hobbies = JSON.parse(data);

    fs.writeFileAsync("underfive.json", JSON.stringify(hobbies.filter(item=>item.lengthInYearsAtHobby < 5)));
}).then(()=>{
    console.log("success");
});
