const express=require('express')
const app=express()

const ejs=require('ejs')

// Importing Passport and Passport Configuration
const passport=require('passport')
const {initializingPassport,isAuthenticated} =require('./passportConfig')
const expressSession=require('express-session')

const {connectMongoose,User}=require('./database')
connectMongoose()

const port = process.env.PORT || 2000

//calls the initializingPassport function, passing in the passport object
initializingPassport(passport)


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//express session work with passport session
app.use(expressSession({
    secret: 'your_secret_key', // Replace with a secure key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}))


// This middleware initializes Passport, required to set up Passport in the app
app.use(passport.initialize())

// This middleware is used to manage persistent login sessions. It works in conjunction with express-session to keep the user authenticated across different requests.
app.use(passport.session())

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/home',isAuthenticated, (req, res) => {
    res.render('home');
});
app.get('/logout',(req,res)=>{
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
})

app.post('/register',async (req,res)=>{
    const user=await User.findOne({username:req.body.username})
    if(user){
        return res.status(400).send(`user already exists : ${user}`)
    } 
        
    const newUser=await User.create(req.body)
    res.status(201).send(`User created successfully : ${newUser}`)
})

// app.post('/login',async (req,res)=>{
//     const user=await User.findOne({username:req.body.username})
//     if(user){
//         if(user.password===req.body.password){
//             return res.render('home')
//         }
//         return res.status(400).send(`Invalid credentials`)
//     } 
//     return res.status(400).send(`Invalid credentials`)
// })
app.post('/login',passport.authenticate('local',{successRedirect:'/home',failureRedirect:'/login'}));
app.listen(port,()=>{
    console.log("App is listening on : http://localhost:2000")
    
})