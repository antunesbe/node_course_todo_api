// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log(`Unable to connect to mongoDB: ${err}`);
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b3c1ea6ca03992738572cfc')
    }, {
        $set: {
            name: "Breno Antunes"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result=> {
        console.log(result)
    })

    // db.close();
})