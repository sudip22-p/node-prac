const express=require('express')
const {connectMongoose,User}=require('./database')
connectMongoose()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port=process.env.PORT



app.get('/',(req,res)=>{
    res.send('i am working')
})

app.post('/register',async (req,res)=>{
    const user=await User.findOne({usename:req.body.username})
    if(user) return res.status(400).sendJson({message:'user already exists'})
    const newUser=await User.create(req.body)
    res.status(201).sendJson({message:'User created successfully'})
})

app.get('/login',(req,res)=>{
    res.send('i am working')
})
app.listen(port,()=>{
    console.log("App is listening on : http://localhost:2000")
    
})