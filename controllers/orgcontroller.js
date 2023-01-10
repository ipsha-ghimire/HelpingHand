const express = require('express');

const homepage = async(req,res)=>{
     res.status(200).json(({msg:'this is homepage'}));


}

module.exports = homepage