var mongoose=require('mongoose')
//mongoose.connect('mongodb://localhost:27017/library')
mongoose.connect('mongodb+srv://rahul:rahul1234@mongodatabase.sb9mw.mongodb.net/BOOKLIBRARY?retryWrites=true&w=majority')
const Schema =mongoose.Schema
var userschema= new Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    age:Number
})
 
var userdata=mongoose.model('userdata',userschema)

module.exports=userdata