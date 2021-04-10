const express = require("express"),
  app = express(),
  runMongo = require("./connectionDB"),
  path = require("path"),
  ejsMate = require("ejs-mate"),
  session = require("express-session"),
  flash = require("connect-flash"),
  ExpressError = require("./utils/expressError"),
  index = require("./routes/index");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "somesecret",
    saveUninitialized: true,
    resave: false,
    cookie: {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.post = req.flash("success");
  next();
});

//routers
app.use("/", index);

//errors
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).render("error", { err });
});

const start = async () => {
  try {
    await runMongo();

    await app.listen(3000, () => console.log("Serve on 3000"));
  } catch (e) {
    console.log(e);
  }
};

start();
