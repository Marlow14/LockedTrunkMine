var Promise = require('bluebird');

Promise.try(()=>{
    return [1,2,3];
}).map(item=>{
    return item*10;
}).then(items=>{
    console.log(items);
})