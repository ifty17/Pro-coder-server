const express = require("express");
const app = express();
const port = process.env.port || 5000;


const courses = require('./data/courses.json')


app.get('/courses', (req,res) =>{
    res.send(courses);
})

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((course) => course.id === id);
  res.send(selectedCourses);
  // console.log(req.params.id);
});

app.get('/', (req, res) =>{
    res.send('Course API Running')
})


app.listen(port, () =>{
    console.log('course api running on port', port)
})