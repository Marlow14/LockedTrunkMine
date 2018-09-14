

function odds(foo){
    let arr1= []; arr1 = foo.filter(n => n%2); return arr1;}
function evens(foo) {
    let arr2= []; arr2 = foo.filter(n => n%1); return arr2;}

module.exports= odds;
module.exports= evens;
