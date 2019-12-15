const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{
    if(err){
        console.log('Unable to Connect');
        return;
    }
    console.log('Connected all right');
    
    db.collection('Todos').findOneAndUpdate({
        name:'Jayant'
    },{
        $set:{name:'Nto'}
    },{returnOriginal:false}).then((res)=>{
        console.log(JSON.stringify(res,undefined,2));
    })
});