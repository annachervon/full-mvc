const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
//load environment variable file
require('dotenv').config({path: "./config/keys.env"});
const app = express();

//Set Handlebars as the Express enginge for the app
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//interpreting url-encoded forms - tells express to make form data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: false}))



//load static resources
app.use(express.static("public"));

//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");

//this is middleware /anything is a route
//map each controller to the app object
app.use("/", generalController);
app.use("/product", productController);



const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Webserver is up and running`);

})