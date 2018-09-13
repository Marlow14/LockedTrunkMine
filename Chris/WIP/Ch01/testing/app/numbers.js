var numbersArray = [];

for(var i = 1; i <= 100; i++){
    numbersArray.push(i);
}


var exports = module.exports = {}; 

exports.getEvens = function(){
   let evens = numbersArray.filter(function(val){
        return 0 == val % 2;
    })
    return evens;
};

exports.getOdds = function(){

    let odds =  numbersArray.filter(function(val){
        return 0 != val % 2;
    })

    return odds;
};

