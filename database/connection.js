const mongoose= require('mongoose');

const dbconnect=async(uri)=>{
    await mongoose.connect(uri,
        {useNewUrlParser:true,
        useUnifiedTopology:true
         })
         console.log('connected to db successfully');
}

module.exports= dbconnect;