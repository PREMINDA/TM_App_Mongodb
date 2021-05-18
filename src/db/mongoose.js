const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/TMApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  compleated: {
    type: String,
  },
});
