const MongoClient=require('mongodb').MongoClient;
//
//MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
//    if(err){
//        console.log('Unable to Connect');
//        return;
//    }
//    console.log('Connected all right');
//    
//    db.collection('Todos').insertOne({
//        name:'Anyd',
//        shd:true
//    },(err,res)=>{
//            if(!err)
//                console.log(JSON.stringify(res.ops));
//});
//    
//    db.close();
//});
//
//MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{
//    if(err){
//         console.log('NOT CONNECTED');
//        return;
//    }
//    console.log('CONNECTED');
//    
//    db.collection('Todos').insertOne({
//        name:'Jayant',
//        rollNo:'12',
//        type: true
//},(err,res)=>{
//        if(!err)
//            console.log(JSON.stringify(res.ops));
//    })
//    db.close();
//})


var obj={name:'JA',age:154};
var {name}=obj;
name='ads';

console.log(name);
