import express,{Application,Request,Response,NextFunction}from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors';
import passport from 'passport'
// import session from 'cookie-session'
import session from 'express-session'
import './passportConfig'
// import "./types/express-user";

const app:Application=express()
const corsOptions = {
    origin: "http://localhost:5000", // Allow only this domain
    methods:  ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};
  
app.use(cors(corsOptions));
  
const port=process.env.PORT||5000
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(
    session({
        secret: process.env.SESSION_SECRET!,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
    })
)

app.use(passport.initialize())
app.use(passport.session())

//routes
app.get('/',(req,res)=>{
    res.send("Hello Hello");
})
app.get(
    "/auth/google",
    passport.authenticate("google",{scope:["profile","email"]})
);

app.get(
    "/auth/callback",
    passport.authenticate("google",{failureRedirect:'/'}),
    (req,res)=>{
        res.redirect('/dashboard')
    }
);

app.get('/dashboard',(req,res)=>{
    // console.log(`demo ${req.user}`)
    if(!req.isAuthenticated())return  res.redirect("/");
    res.send(`Welcome ${req.user?.displayName||"unknown user"}`)
    // res.send(`Welcome ${req.user?.emails||"unknown user"}`)
});



app.listen(port,()=>{console.log(`Server is running on port ${port}`)})