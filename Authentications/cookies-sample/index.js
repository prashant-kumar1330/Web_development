const express= require('express')
const session= require('express-session')
const app= express()
app.use(session({
    secret: 'a very long ungueesable string',
    resave: false, 
    saveUninitialize: true,

 }))
app.get('/',(req,res)=>{
    console.log(req.session)
    if(!req.session.visits){
        req.session.visits=1
        res.send("hello there")
    }
    else{
        req.session.visits++
        res.send('welcome back')
    
    }
    req.session.save()
        
    res.send('hello world')
})
app.listen(3000,()=>{
    console.log('server is started at  http://localhost:3000')
})