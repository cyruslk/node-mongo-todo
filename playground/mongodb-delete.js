// const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");


    // db.collection("Todos").deleteMany({
    //   text: "Something to do"
    // }).then((result) => {
    //     console.log(result);
    // });

    // result: { n: 2, ok: 1 },

    // Delete only one document
    // db.collection("Todos").deleteOne({
    //   text: "this is a true test"
    // }).then((result) => {
    //     console.log(result);
    // });


    // Delete only one document
    db.collection("Todos").findOneAndDelete({
      completed: false
    }).then((result) => {
        console.log(result);
    });




    db.close();
});
