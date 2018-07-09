var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo')
var {User} = require('./models/user')


var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        console.log('New Todo Saved')
        res.status(201).send(doc);
    }).catch(err => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find({}).then(todos => {
        res.status(200).send({todos});
    }).catch(err => {
        res.status(500).send(err);
    })
});

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('');
    }
    Todo.findById(id).then(todo => {
        if(!todo){
            return res.status(404).send('Not found');
        }
        res.status(200).send(todo);
    }).catch(err => {
        res.status(500).send(err);
    })
})


app.listen(3000, () => {
    console.log('Server listening at 3000');
});

module.exports = {app};