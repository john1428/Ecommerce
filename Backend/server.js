import express from 'express'
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';
import User from './models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookieparser from 'cookie-parser'


const app = express();

app.use(cookieparser())

app.use(cors({credentials:true,origin:'http://localhost:5173'}))
app.use(express.json());


// app.all('/', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3010");
//     next()
//   });

let salt = bcrypt.genSaltSync(10);


mongoose.connect('mongodb+srv://sidharth:nd81V1MYPlgsqhzH@cluster0.g53ndyb.mongodb.net/')

app.get('/',(req,res)=>{

    return res.send("Server is ready here");
})


app.get('/message',(req,res)=>{
    res.json({message : "Sending server response"});
})


app.post('/register', async (req,res) =>{
    const {username,userpassword} = req.body

    try{
        const userDoc = await User.create({
            username :username,
            password : bcrypt.hashSync(userpassword,salt)
        })
        res.json(userDoc)
    }

    catch(e){
        res.status(400).json(e)
    }
    
})


app.post('/login' ,async(req,res) =>{
    const {username,userpassword} = req.body
    try{

        const userDoc = await User.findOne({username})

        const passok = bcrypt.compareSync(userpassword, userDoc.password)
        if(passok){
            jwt.sign({username, id : userDoc._id}, process.env.ACCESS_TOKEN_SECRET, {}, (err,token)=>{
                if(err)throw err;
                res.cookie('token',token).json({
                    id : userDoc._id,
                    username
                });
            })
            // res.json({accessToken : accessToken})
        }
        else{
            res.status(400).json("Wrong credentials")
        }

    }catch(e){
        console.error(e)
    }

    

})

app.get('/profile', (req,res)=>{
    // const usertoken = req.headers.authorization;
    // const token = usertoken.split(' ');
    // const decoded = jwt.verify(token[1], 'secret-key');
    // console.log(decoded);


    const {token} = req.cookies
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, {}, (err,info)=>{
        if(err)throw err;
        res.json(info)
    })
    // res.send(req.cookies);
})



app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok')
})




const port  = process.env.PORT || 7070;


app.listen(process.env.PORT, ()=>{
    console.log(`serve at http://localhost:${port}`);
});