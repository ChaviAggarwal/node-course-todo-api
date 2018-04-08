const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{

if(err)
{
    return console.log('Unable to connect');
}

console.log('Connected');
/*db.collection('ToDos').insertOne({

text:'Smething to do',
completed:false

},(err,result)=>{
    if(err){

        return console.log("Unable to insert",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
}

*/
  db.collection('Users').insertOne({

Name:'Chavi',
Address:'Gurgaon',
Age:26

},(err,result)=>{
    if(err){

        return console.log("Unable to insert",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
}  
)
db.close();
});