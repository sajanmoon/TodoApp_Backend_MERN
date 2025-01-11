const { default: mongoose } = require("mongoose");

const todoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const todoModels = mongoose.model("Todo", todoSchema);

module.exports = todoModels;
