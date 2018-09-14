const express = require('express');
const Promise = require('bluebird');

module.exports = function({db}){
    const router = express.Router();

    router.get('/', function(req,res,next){
        Promise.try(()=>{
            return db('scores').insert([
                {
                    homeTeam: 'Ravens',
                    awayTeam: 'Steelers',
                    homeScore: 23,
                    awayScore: 21,
                    date: new Date(2018,10,20)
                },
                {
                    homeTeam: 'Steelers',
                    awayTeam: 'Ravens',
                    homeScore: 30,
                    awayScore: 25,
                    date: new Date(2018,11,9)
                }
            ]);
        }).then(()=>{
            return db('scores');
        }).then(scores=>{
            res.json(scores);
        }).catch(next);
    })

    return router;
}
