const express = require('express')

const app = express()

function firstMiddleware(req,res,next){
    console.log("firstMiddleware")
    next();
}
function secondMiddleware(req,res,next){
    console.log("secondMiddleware")
    next();
}
app.use(firstMiddleware)
app.get('/home',function(req,res){
    console.log("redirecting home")
    res.send({"message":"home"})
})
app.get('/page1',secondMiddleware,function(req,res){
    console.log("sending data to page1")
    res.send({"message":"page1"})
})
app.get('/page2',secondMiddleware,function(req,res){
    console.log("redirecting to page2")
    res.send({"message":"page2"})
})
app.listen(5005,function(){
    console.log("staring server at 5005")
})