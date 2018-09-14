let express = require('express');
let router = express.Router();
let _ = require('lodash');

let friends = [
    {id:1, name:'Ray', hobbies:[{id:1, name:"Hunting"},{id:2, name:"Eating"}]},
    {id:2, name:'Rob', hobbies:[{id:1, name:"Bowling"},{id:2, name:"Golf"}]},
    {id:3, name:'Jen', hobbies:[{id:1, name:"Fitness"},{id:2, name:"Shopping"}]}
];

router.get('/', function(req,res){
    res.json(friends);
})

router.get('/:id', function(req,res){
    res.json(friends.find(friend=>friend.id == req.params.id));
})

router.get('/:id/hobbies', function(req,res){
    res.json(friends.find(friend=>friend.id==req.params.id).hobbies);
})

router.get('/:id/hobbies/:hobbyId', function(req,res){
    res.json(friends.find(friend=>friend.id==req.params.id).hobbies.find(hobby=>hobby.id==req.params.hobbyId));
})

router.post('/', function(req,res){
    let friend = req.body;
    friend.id = _.maxBy(friends, friend=>friend.id).id + 1;
    friends.push(friend);
    res.statusCode = 201;
    res.json(friend);
})

router.delete('/:id', function(req,res){
    friends = friends.filter(friend=>friend.id != req.params.id);
    res.statusCode = 200;
    res.json(friends);
})

router.put('/:id', function(req,res){
    let newFriend = req.body;
    newFriend.id = req.params.id;
    friends = friends.filter(friend=>friend.id != req.params.id);
    friends.push(newFriend);

    res.statusCode = 200;
    res.json(friends);
})

module.exports = router;
