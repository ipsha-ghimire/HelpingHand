const chalk = require("chalk");
const express = require("express");
const app = express();
const connectdb = require('./database/connection');
const morgan= require('morgan');
require('dotenv').config();
app.use(morgan('tiny'));
//importing routers and controllers

const homepagerouter = require('./routes/homerouter');
app.use('/',homepagerouter);

const start = async(req,res)=>{
    try{
        await connectdb(process.env.MONGODB_URL);

        app.listen(3000,()=>{
    
            console.log('App is listening at port '+ chalk.blue(3000));
        
        })

       
        }
        catch(error){
           console.log(error);
        }
}
start();

