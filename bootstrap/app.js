const express = require('express'),
app = express(),
path = require('path'),
ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(4200, () => console.log("port is running on 4200"));