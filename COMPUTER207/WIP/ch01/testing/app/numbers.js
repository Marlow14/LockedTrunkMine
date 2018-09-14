let numberArr = [];
for(var i = 1; i < 101; i ++) {
    numberArr.push(i);
}
 




module.exports.getEvens = function getEvens(){
    let evenNums = [];
    for(var i = 0; i < numberArr.length; i ++) {
        if(numberArr[i]%2 == 0){
            evenNums.push(numberArr[i]);
        }
    }
    return evenNums;
};

module.exports.getOddss = function getOdds(){
    let oddNums = [];
    for(var i = 0; i < numberArr.length; i ++) {
        if(numberArr[i]%2 == 1){
            oddNums.push(numberArr[i]);
        }
    }
    return oddNums;
};