import express from 'express';
import Task from './models/Task.js';

const app = express();
app.use(express.urlencoded({ extended: true }));


app.post("/add", async function (req, res) {
  const task = new Task();
  task.task = req.body.task
  await task.save();
  res.redirect('/');
});

app.get("/delete/:id", async function (req, res) {
  await Task.delete({ id: req.params.id });
  res.redirect('/');
});

app.get("/", async function (req, res) {
  const tasks = await Task.loadMany();
  res.render('listTasks.ejs', { tasks: tasks });
});

app.listen(4000);
