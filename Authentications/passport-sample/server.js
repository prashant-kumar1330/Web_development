const express= require('express')
const {db,users}= require('./db')
const session= require("express-session")
const mypassport= require('./setupPassport')


const server= express()

server.set('view engine', 'hbs')
server.use(express.json())
server.use(express.urlencoded({extended: true}))

app.use(
    session={}
        
    
)
   
