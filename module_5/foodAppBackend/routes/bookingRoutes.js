const express = require("express");
const bookingRouter = express.Router();

const {createSession} = require("../controller/bookingController")

bookingRouter.post('/createSession',createSession);

bookingRouter.get('/createSession',function(req,res){
    res.sendFile("C:\Users\yadav\Desktop\FJP6_2\module_5\foodAppBackend\booking.html")
})

module.exports = bookingRouter;