const  express = require("express")

const app = express();

//npm i cookie-parser
const cookieParser = require("cookie-parser");

//npm i jsonwebtoken
var jwt = require('jsonwebtoken');
const secretKey = "ajpodhdxnvxrcgdfz";

app.use(express.json());
app.use(cookieParser());


const userModel = require("./userModel");

//signup input:
//name,
//password
//confirm password
//address
//email
//phone
//pic


app.post("/signup",async function(req,res){
    try{
        let data = req.body;
        let newUser = await userModel.create(data);
        console.log(newUser);
        res.json({
            message:"data recieved",
        })}
    catch(err){
        res.send(err.message)
    }
})

app.post("/login",async function(req,res){
    try{
        let data = req.body;
        // console.log(data);
        let {email,password} = data;

        if(email && password){
            let user = await userModel.findOne({email:email});
            if(user){
                if(user.password == password){
                    //create JWT -> payload, secret key, algo by default -> SHA256
                    const token = jwt.sign({data: user['_id']}, secretKey);
                    console.log(token);
                    //put token into cookie
                    res.cookie("JWT", token);
                    res.send("User logged in");
                }else{
                    res.send("Email or Password does not match");
                }
            }else{
                res.send("User with this email does not exist. Kindly sign up");
            } 
        }else{
            res.send("Kindly enter email and password both");
        }
    }catch(err){
        console.log(err.message);
    }
})


app.patch("/forgetPassword",async function(req,res){
    try{
        let {email} = req.body; //destructure email
        let otp = otpGenerator();
        let user = await userModel.findOneAndUpdate({email:email},{otp:otp},{new:true});//ab forget password ke liye hume email, otp, new i.e new password chahiye hoga
        console.log(user);
        res.json({
            data:user,
            "message":"Otp send to your mail"
        })
    }catch(err){
        res.send(err.message);
    }
})

app.patch("/resetPassword", async function(req,res){
    try{
        let {otp,password,confirmPassword} = req.body;
        let user = await userModel.findOneAndUpdate({otp},{password,confirmPassword},{
            runValidators:true,new:true
        });

        console.log(user);
        
        res.json({
            data:user,
            messaage:"Pasword for the user is reset"
        })

    }catch(err){
        res.send(err.message)
    }
})

function otpGenerator(){
    return Math.floor(Math.random()*100000);
}


app.get("/users", protectRoute,async function(req,res){
    try{
        let users = await userModel.find();
        res.json(users);
    }catch(err){
        res.send(err.message);
    }
    // console.log(req.cookies);
    
    // res.send("cookie read");

})

app.get("/user",protectRoute, async function(req,res){
    try{
        const userId = req.userId;
        const user = await userModel.findById(userId);
        //to send json data
        res.json({
            data:user,
            message:"Data about logged in user is send"
        })
    }catch(err){
        res.send(err.message)
    }
    
})



function protectRoute(req,res,next){
    try{
        let cookies = req.cookies;
        let JWT = cookies.JWT;
        if(cookies.JWT){
            const token = jwt.verify(JWT,secretKey);
            console.log(token);
            let userId = token.data;
            req.userId = userId;
            next();
        }else{
            res.send("You are not logged in. Kindly login");
        }
    }catch(err){
        console.log(err);
        res.send(err.message)
    }
    
}


app.listen(3000,function(){
    console.log("server started at 3000");
})