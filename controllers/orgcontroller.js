const express = require('express');
exports.homepage=async(req,res)=>{
     // res.status(200).json(({msg:'this is homepage'}));
     res.status(200).render('home');

},
 exports.adminadd=async(req,res)=>{
     res.status(200).render('adminadd');
}

// module.exports = {homepage,adminadd}