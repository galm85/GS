const express = require('express');
const mongoose = require('mongoose');
const app = express();







app.get('/user',(req,res)=>{
    res.send('users');
})


app.get('/',(req,res)=>{
    res.send('Hello From GS');
})











app.listen(3000,()=>console.log('Server is running'));
