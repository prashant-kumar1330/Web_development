const express = require('express')
const app= express();
app.set('view engine', 'hbs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/add',(req,res)=>{
    res.render('add')
})
app.listen(4848,()=>{
    console.log(' working on port 4848')
})