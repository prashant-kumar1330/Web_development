const route =require('express').Router()
let teacher=[
    {name: 'j', college:  "nsit"},
    {name: 'p', college:  "nsit"},
    {name: 'dee', college:  "nsit"},
    {name: 'aua', college:  "nsit"},
    {name: 'hi', college:  "nsit"},
    {name: 'prb', college:  "nsit"}
]
route.get('/',(req,res)=>{
    res.send(teacher)
})
route.get('/:id',(req,res)=>{
    res.send(teacher[req.params.id])
})
module.exports= route;