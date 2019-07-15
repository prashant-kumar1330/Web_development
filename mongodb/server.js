const express = require('express')
const app = express();
app.use(express.json())
app.set('view engine','hbs')
app.get('/',(req,res)=>{
 res.render('index')
})
app.get('/login',(req,res)=>{
    res.render('login')
    
        req.on('end',function(chunk){
            var q= querystring.parse(data)
            console.log(q)
        })
    
})
app.listen(3001,()=>{
    console.log('i m working on port 4848')
})