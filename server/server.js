var express=require('express')
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {User}=require('./models/user');
var {Todo}=require('./models/todo');

var app=express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var nTodo=new Todo({
        text:req.body.text
    });
    
    nTodo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{console.log('Error in saving');
           res.status(400).send();
           });
});

app.listen(3000,()=>{
          console.log(`App Running at port 3000`);
})

