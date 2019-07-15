const express=require('express')
const server =express()
server.get('/',function(req,res,next){
    res.send('hello world')
})

server.get('/greet/:tod',function(req,res,next){
    let tod =' morning'
    
    
    let greeting='good '+ req.params.tod +','+req.query.name;
    res.send(greeting)

})
server.get('/html',function(req,res,next){
    res.send(`<html>
    <body>
    <h1>hello i am your old freind HTML</h1>
    </body>
    </html>`)
})
server.listen(2121,()=>{
    console.log('i am working ')
}) 