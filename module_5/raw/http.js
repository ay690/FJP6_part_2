let http = require("http");
//console.log(http);

//creating server

const app = http.createServer(function(res, req){
    res.write("hello world");
    res.end();
})

app.listen(5000);