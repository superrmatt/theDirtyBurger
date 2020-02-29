const express = require("express");
const handle = require("express-handlebars");
const routes = require("./controllers/burger_controller")

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars",handle({defaultLayout: "main"}));
app.set("view engine","handlebars");
app.use(routes);

app.listen(PORT, ()=>{
    console.log("Server listening on: http://localhost:" + PORT);
});