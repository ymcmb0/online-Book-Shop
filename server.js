const express = require("express");
const app = express();
const port = process.env.port || 3000;
const userRoute = require("./routes/routes");

app.use("/", userRoute);
app.set("view engine", "hbs")
app.use(express.static('public'))
app.get("", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
