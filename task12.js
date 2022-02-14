var express=require('express');
//const bodyparser=require('body-parser')
var app=express();


const nav= [{name:'HOME',link:'/'},{name:'CONTACT',link:'/contact'},{name:'BOOK',link:'/book'},{name:'authors',link:'/author'},{name:'ADD BOOK',link:'/admin'},{name:'ADD AUTHOR',link:'/admin/addauthor'},{name:'signIn',link:'/user/signin'},{name:'signUp',link:'/user/signup'}]


var bookrouter=require('./src/routes/bookrouter')(nav);
var authorouter=require('./src/routes/authorouter')(nav);
var adminrouter=require('./src/routes/adminrouter')(nav);
var userrouter=require('./src/routes/userrouter')(nav);


app.use(express.static('./public'));

//to conncet middleware
app.use(express.urlencoded({extended:true}))


app.use('/book',bookrouter);
app.use('/author',authorouter);
app.use('/admin',adminrouter);
app.use('/user',userrouter);

app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',(req,res)=>{
    res.render('signin',
    {
        nav
    });
});

app.listen(8080,()=>{
    console.log("server started");
    console.log(__dirname);
})