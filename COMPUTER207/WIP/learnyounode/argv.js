console.log(process.argv);
let sum = 0;
process.argv.forEach((val, index) => {
    if(index > 1)
        sum += Number(val);
})
console.log("sum: " + sum);



console.log(process.argv);
let sum2 = 0;
for(var i = 2; i < process.argv.length; i ++){
    sum2 += Number(process.argv[i]);
}
console.log("sum2:   " + sum2);