const express = require("express");
//const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/route")
const app = express();
const dotenv = require('dotenv');
dotenv.config();


//app.use(bodyParser.json());

mongoose.connect("mongodb+srv://HarshalJamdar:810Umakant@cluster0.wz2ii.mongodb.net/KoinX", {
    useNewUrlParser: true 
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );

app.use('/',route);

app.listen(5000,()=>{
    console.log("Express app runing on the port 5000")
});