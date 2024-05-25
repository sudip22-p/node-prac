const {User}=require('./database')
const LocalStrategy=require('passport-local').Strategy
  exports.initializingPassport=(passport)=>{

    passport.use(new LocalStrategy(
        async(username, password, done)=> {
            try{
                //checking user already exist or not
                const user =await User.findOne({ username: username })
                //if not exists
                if (!user) { return done(null, false); }
                //if  exist and then check password & if password donot match--basic comp.
                if (user.password!==password) { return done(null, false); }
                //return callback with no error and user data:
                return done(null, user);
            }catch(error){
                return done(error, false);
            }
        }

    ))
    //mandatory:
    //stores the users' id on session
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    //retrieves the users' info using id from session
    passport.deserializeUser(async(id,done)=>{
        try{
            const user =await User.findById(id)
            done(null,user)
        }catch(error){
            done(error,false)
        }
    })


  }
//   middleware--checking the authenticated or not --for letting accesss to home page or not
exports.isAuthenticated=(req,res,next)=>{
    if(req.user){
        return next()
    }
    res.redirect('/login')
}

