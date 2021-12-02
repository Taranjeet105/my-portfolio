const express=require('express')
require('dotenv').config()
const bodyParser=require('body-parser')
const cors = require('cors');
const app=express()
const path=require('path')
const PORT= process.env.PORT || 3000
const authRoutes=require('./routes/authroutes')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
let public=path.join(__dirname,'./public')
let assets=path.join(__dirname,'./assets')
console.log(public)
app.use(express.static(public))
app.use(express.static(assets))
app.set('view engine','ejs')
app.use(authRoutes)

app.listen(PORT,()=>{
    console.log("server running on PORT "+PORT)
})