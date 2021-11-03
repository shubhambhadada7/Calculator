var exp=require('express');
var bps=require('body-parser');

var app=exp();

app.use(bps.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");

});


app.post("/",function(req,res){

    var n1=Number(req.body.n1);
    var n2=Number(req.body.n2);

    var resu=n1+n2;



    res.send("Thanks\n"+ resu );

});




app.listen(3000,function () {

    console.log("You are good to go");
    
})