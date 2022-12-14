const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

//routes
const adminRoutes = require("./rotes/admin");
const shopRoutes = require("./rotes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//imported routes from other file
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
});

app.listen(3000);

//using next
// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });
