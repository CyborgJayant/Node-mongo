const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('Unable to Connect');
        return;
    }
    console.log('Connected all right');
    
    db.collection('Todos').findOneAndDelete({
        completed:false
    }).then((res)=>{
        console.log(JSON.stringify(res.value,undefined,2));
    })
});