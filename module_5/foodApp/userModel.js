//tech knowledge
//(scheme) -> set of features and rules a certain entity should follow
const mongoose = require('mongoose')

let dbLink =  `mongodb+srv://dbUser:7I4gacSdkMcyvQed@cluster0.s8axloi.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})
