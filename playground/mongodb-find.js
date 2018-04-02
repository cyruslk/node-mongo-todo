// const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require("mongodb");

// Using Destructuring:
// var  user = {name: "cyrus", age: 26};
// var {name} = user;
// console.log(name);

// vat obj = new ObjectID()
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find().toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // // To query specific todos with the completed: true
    // db.collection('Todos').find({
    //     completed: true
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    //
    //
    // // To count all the todos with the ID
    // db.collection('Todos').find({
    //     _id: new ObjectID("5ac1aa8335d4eb5b4a81132d")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });



    // To count specific todos
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`todos count ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection("Users").find({
      name: "james"
    }).count().then((count) => {
      console.log(`Users count ${count}`);
    }, (err) => {
      console.log('Unable to fetch Users', err);
    });



    db.close();
});
