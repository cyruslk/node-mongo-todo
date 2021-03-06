var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// building the model -->
var Todo = mongoose.model("Todo", {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})


var newTodo = new Todo({
  text: "Cook Diner",
  completed: false
})

newTodo.save().then((doc) => {
  console.log("Saved todo", doc);
}, (e) =>{
  console.log("Unable to save todo");
});



var otherTodo = new Todo({
  text: "Feed the cat",
  completed: true,
  completedAt: 123
})



otherTodo.save().then((doc) => {
  console.log("Saved todo", doc);
}, (e) =>{
  console.log("Unable to save todo");
});
