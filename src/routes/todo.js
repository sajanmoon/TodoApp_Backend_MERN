const express = require("express");
const Todo = require("../models/todo");

const todoRouter = express.Router();

// To create a TODO task
todoRouter.post("/todo", async (req, res) => {
  // creating a instance of todo model
  const task = new Todo(req.body);

  try {
    await task.save();
    res.send("task created succesfully");
  } catch (error) {
    res.status(400).send("failed", error);
  }
});

// To find all the task
todoRouter.get("/todo", async (req, res) => {
  try {
    const data = await Todo.find({});
    res.json({ message: "data fetched", data });
  } catch (error) {
    res.status(400).send("failed", error);
  }
});

// To Edit a TODO task
todoRouter.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedTask = await Todo.findByIdAndUpdate(id, data);
    res.json({ message: "data updated succesfully", updatedTask });
  } catch (error) {
    res.status(400).send("updated failed", error);
  }
});

// To Delete a task
todoRouter.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.send("Deleted succesfully");
  } catch (error) {
    res.status(400).send("Delete failed", error);
  }
});

module.exports = todoRouter;
