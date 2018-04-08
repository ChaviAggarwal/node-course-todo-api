//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{

if(err)
{
    return console.log('Unable to connect');
}

console.log('Connected');



db.collection('Users').findOneAndUpdate({_id: new ObjectID('5ac9a0e420c5c912fc267948')},

{
    $set:{
        Name:'Jolly'
    },


    $inc:{
        Age:1
    }


},
{
returnOriginal:false
},
).then((result)=>{

    console.log(JSON.stringify(result,undefined,2));
},


(err)=>

{
 
 console.log("Unable to delete");

}

)

db.close();
});