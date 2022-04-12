const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  // let student ={name:"mahmoud",age:22,course:['html'],isadmin:true}
  // //res.send(student.course)
  // stringData = JSON.stringify(student)
  // jsonData = JSON.parse(stringData)
  // //res.send(stringData)
  // res.status(404).send('not found');

    let v = true;
    if (v) res.redirect("/about");
    else res.redirect("/login");
});

app.get("/about", (req, res) => {
    res.send("about page");
});

app.get("/login", (req, res) => {
    res.send("login page");
});

app.get("/hello", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`server run on ${PORT}`));
