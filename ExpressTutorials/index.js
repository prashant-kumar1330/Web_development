 const express= require('express');
 const app= express();
 let courses=[{
     id: 1, course: 'c'
 },
{
    id: 2, course: 'python'
},
{
    id: 3, course: 'javasript'
},
{
    id: 4, course: 'nodejs'
}]
     
 app.use(express.json())
 app.get('/',(req,res)=>{
     res.send('hello world')
 })
 app.get('/freinds',(req,res)=>{
     
    res.send([1,2,3]) ;
 })
 app.get('/freinds/:id',(req,res)=>{
     res.send(req.param.id)
 })
 app.get('/freinds/post/:month/:day',(req,res) => {
   res.send(req.params)
 })
 app.get('/courses',(req,res)=>{
     res.send(courses)

 })
app.get('/courses/:id',(req,res)=>{
    const course= courses.find(c=> c.id===parseInt(req.params.id))
    if(!course){
        res.status(404).send('page not found')
    }
    else{
        res.send(course)
    }
})
app.post('/courses',(req,res)=>{
    const course={
  id: courses.length+1,
  course: req.body.name
    }
    courses.push(course)
    res.send(course);
})

 const port=process.env.PORT|| 3000
 app.listen(port,()=> console.log(`i m working on ${port}`))
