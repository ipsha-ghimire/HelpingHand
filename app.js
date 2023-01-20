const chalk = require("chalk");
const express = require("express");
const path= require('path');
const app = express();
const connectdb = require('./database/connection');
const morgan= require('morgan');
require('dotenv').config();
//middlwares
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'./public')));

//to use partials do require template engine
const ejs= require('ejs');

//seting ejs
app.set('view engine','ejs');


//importing routers and controllers
const {homepagerouter} = require('./routes/homerouter');
const {adminaddrouter}=require('./routes/homerouter')

app.use('/',homepagerouter);
app.use('/add',adminaddrouter);

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

