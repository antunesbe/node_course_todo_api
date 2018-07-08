// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log(`Unable to connect to mongoDB: ${err}`);
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat'}).then(result => {
    //     console.log(result);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat'}).then(result => {
    //     console.log(result);
    // })
    // //fineOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // })


    // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5b3c2166a913b8016918fc4e')}).then(result => {
    //     console.log(result);
    // })

    // db.close();
})