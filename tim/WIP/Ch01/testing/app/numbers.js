let numbers = Array(100).fill().map(function(element,index){return index+1;});
console.log(numbers);
module.exports.getEvens = function(){
    return numbers.filter(val=>val % 2 == 0);
};

module.exports.getOdds = function(){
    return numbers.filter(val=>val % 2 != 0);
};

console.log(module.exports.getEvens());
console.log(module.exports.getOdds());