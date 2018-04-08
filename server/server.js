var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');

var  ToDo=mongoose.model('ToDo',{

    text:{type:String},
    completed:{type:Boolean},
    completedAt:{type:Number},
    email:{

        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

/*var newToDo=new ToDo({

text:'Cook Dinner'

});
newToDo.save().then((doc)=>

{

    console.log('Saved todo',doc);
},
(err)=>{


    console.log("Unable to save ToDo");
}
)*/
var otherToDo=new ToDo({

text:'Cook Mushroom',
completed:true,
completedAt:123,
email:'  chaviagg@gmail.com'

});
otherToDo.save().then((doc)=>

{

    console.log(JSON.stringify(doc,undefined,2));
},
(err)=>{


    console.log("Unable to save ToDo");
}
)