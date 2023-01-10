require('dotenv').config();
const connectdb=require('./database/connection');
const orgjsondata= require('./orgdata.json');
const orgmodel= require('./model/orgSchema');

const start=async()=>{
    try{
    await connectdb(process.env.MONGODB_URL);
    await orgmodel.deleteMany();
    await orgmodel.create(orgjsondata);
    console.log('data added to collection succesfully');
    }
    catch(error){
       console.log(error);
    }
}

start();