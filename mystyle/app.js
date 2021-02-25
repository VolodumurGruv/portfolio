const express = require("express"),
  app = express(),
  path = require("path"),
  ejsMate = require("ejs-mate"),
  index = require("./routes/index");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//routers
app.use("/", index);

app.listen(4200, () => console.log("Serve on 4200"));
