const allNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var exports = module.exports = {};

 exports.getEvens = function() {
     let evens = allNums.filter(function(element) {
            return (element % 2 == 0);
        });
 return evens;
    }
 exports.getOdds =  function () {
     let odds = allNums.filter(function(element) {
            return (element % 2 !== 0);
        });
 return odds;
    }

        