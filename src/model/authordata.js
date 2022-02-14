var mongoose=require('mongoose')
//mongoose.connect('mongodb://localhost:27017/library')
mongoose.connect('mongodb+srv://rahul:rahul1234@mongodatabase.sb9mw.mongodb.net/BOOKLIBRARY?retryWrites=true&w=majority')

const Schema =mongoose.Schema
var authorschema= new Schema({
    name:String,
    nickname:String,
    booknos:Number,
    img:String,
    

})
 
var authordata=mongoose.model('Authordata',authorschema)

module.exports=authordata