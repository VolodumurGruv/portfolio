const express = require("express"),
  app = express(),
  runMongo = require("./connectionDB"),
  path = require("path"),
  ejsMate = require("ejs-mate"),
  index = require("./routes/index");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", index);

// app.get("/about", (req, res) => res.send("HEllo"));

const start = async () => {
  try {
    await runMongo();

    await app.listen(4200, () => console.log("Serve on 4200"));
  } catch (e) {
    console.log(e);
  }
};

start();
