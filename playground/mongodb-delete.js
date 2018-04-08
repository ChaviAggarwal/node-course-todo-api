//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{

if(err)
{
    return console.log('Unable to connect');
}

console.log('Connected');

/*db.collection('Users').deleteMany({Name:'Chavi'}).then((result)=>{

    console.log(result);
},


(err)=>

{
 
 console.log("Unable to delete");

}

)*/

db.collection('Users').findOneAndDelete({_id: new ObjectID('5ac9a0e420c5c912fc267949')}).then((result)=>{

    console.log(JSON.stringify(result,undefined,2));
},


(err)=>

{
 
 console.log("Unable to delete");

}

)

db.close();
});