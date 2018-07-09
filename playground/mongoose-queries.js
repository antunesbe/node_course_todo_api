const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b437e38305fd3691edf845e';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then(todos => {
    console.log(todos);
});

Todo.findOne({
    _id: id
}).then(todo => {
    console.log(todo);
});

Todo.findById(id).then(todo => {
    console.log(todo);
});