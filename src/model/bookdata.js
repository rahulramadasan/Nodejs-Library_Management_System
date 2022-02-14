
var mongoose=require('mongoose')
//mongoose.connect('mongodb://localhost:27017/library')
mongoose.connect('mongodb+srv://rahul:rahul1234@mongodatabase.sb9mw.mongodb.net/BOOKLIBRARY?retryWrites=true&w=majority')

const Schema =mongoose.Schema
var bookschema= new Schema({
    name:String,
    author:String,
    publication:String,
    price:Number,
    img:String,
    
})
 
var bookdata=mongoose.model('Bookdata',bookschema)

module.exports=bookdata



