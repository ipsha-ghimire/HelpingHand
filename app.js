const chalk = require("chalk");
const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log('App is listening at port '+ chalk.blue(3000));

})