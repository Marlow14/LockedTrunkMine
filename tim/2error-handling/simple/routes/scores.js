const express = require('express');
const Promise = require('bluebird');

module.exports = function({db}){
    const router = express.Router();

    router.get('/', function(req,res,next){
        Promise.try(()=>{
            return db('scores');
        }).then(scores=>{
            res.json(scores);
        }).catch(next);
    })

    return router;
}
