const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send(
        newDate()
    )
})
app.listen(3000)
