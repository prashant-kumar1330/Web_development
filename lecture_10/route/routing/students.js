const route =require('express').Router()
let student=[
    {name: 'prashant', college:  "nsit"},
    {name: 'lokesh', college:  "nsit"},
    {name: 'deeonashu', college:  "nsit"},
    {name: 'auashant', college:  "nsit"},
    {name: 'hieitj', college:  "nsit"},
    {name: 'prbah', college:  "nsit"}
]
route.get('/',(req,res)=>{
    res.send(student)
})
route.get('/:id',(req,res)=>{
    res.send(student[req.params.id])
})
module.exports= route;