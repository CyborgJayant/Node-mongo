const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('Unable to Connect');
        return;
    }
    console.log('Connected all right');
    
    var d=db.collection('Todos').find({completed:false}).toArray().
    then((doc)=>{
        console.log(JSON.stringify(doc,undefined,2));
    },(err)=>{});
    
    
    var d2=db.collection('Todos').find().count().
    then((count)=>{
        console.log(`Conut is ${count}`);
    },(err)=>{});
    
    db.close();
});