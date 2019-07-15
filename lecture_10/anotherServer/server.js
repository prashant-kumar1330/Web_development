const express= require('express')
const server=express();
server.get('/a',function(req,res,next){
    res.send('hello i am prashant')
})
server.use((req,res,next)=>{
    res.send('404 PAGE NOT FOUND')
    next();
})
server.use((req,res)=>{
  console.log('i m middleware 2')
})
server.listen(2121,()=>{
    console.log('HELLO I AM WORKING ON PORT 4337')
})
