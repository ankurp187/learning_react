const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const expressSession = require('express-session')({
    secret:'secret',
    resave:false,
    saveUninitialized:false
});

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSession);


app.use(express.static(__dirname));


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log('listening at: '+port));

app.use(passport.initialize());
app.use(passport.session());

/* Mongoose Setup */ 
mongoose.connect('mongodb://127.0.0.1:27017/authentication',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const Schema = mongoose.Schema;
const UserDetail = new Schema({
    username:String,
    password:String
});

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo',UserDetail,'userInfo');


/* passport local authentication */
passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

/* ROUTES */

const connectEnsureLogin = require('connect-ensure-login');

app.post('/login',(req,res,next) => {
    passport.authenticate('local',(err,user,info) => {
        if(err){
            return next(err);
        }

        if(!user){
            return res.redirect('/login?info='+info);
        }

        req.logIn(user,function(err){
            if(err){
                return next(err);
            }

            return res.redirect('/');
        });
    })(req,res,next);
});

app.get('/login',
    (req,res) => res.sendFile('html/login.html',{root:__dirname})
);

app.get('/',
    connectEnsureLogin.ensureLoggedIn(),
    (req,res) => res.sendFile('html/index.html',{root:__dirname})
);

app.get('/private',
    connectEnsureLogin.ensureLoggedIn(),
    (req,res) => res.sendFile('html/private.html',{root:__dirname})
);

app.get('/user',
    connectEnsureLogin.ensureLoggedIn(),
    (req,res) => res.send({user:req.user})
);





