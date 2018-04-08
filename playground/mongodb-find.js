const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{

if(err)
{
    return console.log('Unable to connect');
}

console.log('Connected');

db.collection('Users').find({Name:'Jolly'}).toArray().then((docs)=>{

    console.log(JSON.stringify(docs,undefined,2));
},


(err)=>

{
 
 console.log("Unable to fetch docs")

}

)

db.close();
});