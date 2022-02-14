var express=require('express');
const bookdata = require('../model/bookdata');
const authordata=require('../model/authordata')
var adminrouter=express.Router();



const multer=require('multer')

    
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/image')
    },
    
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname + '-' + uniqueSuffix)
    }
})

const upload=multer({storage: storage})


function router(nav){
    adminrouter.get('/',(req,res)=>{
        res.render('addbook',{
            nav
        });
    });
    
    adminrouter.get('/addauthor',(req,res)=>{
        res.render('addauthor',{
            nav
        });
    });
    adminrouter.post('/add',upload.single('image'),function(req,res){
        var items={
            name:req.body.name,
            author:req.body.author,
            publication:req.body.publication,
            price:req.body.price,
            img:req.file.filename

        }
        console.log(items)
        var book=bookdata(items)
        book.save()
        res.redirect('/book')
        
    })
    adminrouter.post('/updatebook',upload.single('image'),function(req,res){
        var items={
            name:req.body.name,
            author:req.body.author,
            publication:req.body.publication,
            price:req.body.price,
            img:req.file.filename,
            id:req.body.id

        }
        console.log(items)
        //var book=bookdata(items)
        bookdata.updateOne({_id:items.id},{$set:items})
        .then(function(){
            res.redirect('/book')
        })
        
        
    })

    
    //changes get to post and query to body
    adminrouter.get('/addauth',(req,res)=>{

        var item={
            name:req.query.name,
            nickname:req.query.nickname,
            booknos:req.query.books,
            img:req.query.image


        }
        console.log(item)
        var author=authordata(item)
        author.save()
        res.redirect('/author')

    })
    return adminrouter
}

module.exports=router;