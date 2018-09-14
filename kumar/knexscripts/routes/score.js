var express = require('express');
var router = express.Router();
let moment = require('moment');



router.get('/:id', function(req, res, next) {
    //res.send('respond with a ------hobby ----------resource');
   /* res.send( { 
      title: 'Hobbies' ,
      hobby: ['Cricket','Running','Tennis']
         
     });*/
  
    let name =   req.params.id
     Promise.try(() => {
        return db("scores").where({
            hometeam: name
        });
    }).then((scores) => {
        console.log("All the people named Joe:", people);
    }).finally(() => {
        db.destroy();
    });
    
     res.render('scores', { 
          title: 'Scores' ,
          scores: scores
              
          });
  });