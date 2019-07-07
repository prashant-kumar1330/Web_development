const express=require(express)
const app=express()
app.use(express.urlencoded({extended:true}))
const users=[]
app.get('/',(req,res)=>{
    res.send(users)
})
app.post('/',(req,))