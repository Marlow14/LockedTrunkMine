//will be used during exercise
const request = require('superagent');

let makesLocal = [];

module.exports = function(global, makes){
    makesLocal = makes;

    global.showmakes = function(){
        let htmlMakes = `<table>
        <tr>
        <th>Make</th>
        <th>Country</th>
        <th>Action</th>
        </tr>`;
        
        makesLocal.forEach(function(m){
            console.log(m.make_display + ' | ' + m.make_country);
            htmlMakes += `
            <tr>
            <td> ${m.make_display}</td>
            <td>${m.make_country}</td>
            <td><button onclick="deletemake(${m.id})">Delete</button></td>
            </tr>`
        });
        document.getElementById("output-makes").innerHTML = htmlMakes;
    };

    global.deletemake = function(id){
         request
    .delete("/Makes/" + id)  /* TODO: ADD THE CORRECT URL*/
    .then(function(res) {
        makesLocal = makesLocal.filter(function(el) {
            return el.id !== id;
        });
        alert(`Deleted record`);
        
        showmakes();
    })
    .catch(function(err) {
        /* err.message, err.response */
        throw new Error('An AJAX error occured: ' + err.message);
    });

        // makesLocal = makesLocal.filter( function (newMakes) {
        //     return newMakes.id !== id;
        // });

        // let htmlMakes = `<table>
        // <tr>
        // <th>Make</th>
        // <th>Country</th>
        // <th>Action</th>
        // </tr>`;

        // makesLocal.forEach(function(m){
        //     console.log(m.make_display + ' | ' + m.make_country);
        //     htmlMakes += `
        //     <tr>
        //     <td> ${m.make_display}</td>
        //     <td>${m.make_country}</td>
        //     <td><button onclick="deletemake(${m.id})">Delete</button></td>
        //     </tr>`
        // });

        // document.getElementById("output-makes").innerHTML = htmlMakes;
        // alert(`Trying to delete ${id} - not yet implemented`);
    }

}