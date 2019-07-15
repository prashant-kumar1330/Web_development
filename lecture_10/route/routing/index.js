const server= require('express')()
const teacherroute= require('./route/teacher')
const studentroute= require('./route/student')
server.use('/student',studentroute)
server.use('/teacher',teacherroute);
server.listen(2233,()=>{
    console.log('hello i m working in port 2233')
})