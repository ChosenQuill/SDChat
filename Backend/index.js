var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);


app.get('/', function(req, res, next){
    console.log('get route', req.testing);
    res.status(200).send("Hi");
});

app.ws('/', function(ws, req) {
    ws.on('message', (msg) => {
        console.log(JSON.parse(msg))
    });
    ws.on("open", () => {
        console.log("Connection Opened")
    })
    ws.on("error", err => {
        console.log(err)
    })
});

app.listen(3000)