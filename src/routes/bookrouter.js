var express=require('express');
var bookrouter = express.Router();
const bookdata = require('../model/bookdata');

function router(nav){

/*var books=[
    {   
        bid:1,
        bname:"Cricket World Cup: The Indian Challenge",
        author:"Ashis Ray",
        price:200,
        image:"p1.jpg"
    },
    {   
        bid:2,
        bname:"My Journey",
        author:"Dr. A.P.J. Abdul Kalam",
        price:200,
        image:"p1.jpg"
    
    },
    {
        bid:3,
        bname:"Making of New India",
        author:"Dr. Bibek Debroy",
        price:200,
        image:"p1.jpg"
    }
    ]*/
    

    bookrouter.get('/:id',(req,res)=>{
        const id=req.params.id;
        bookdata.findOne({_id:id})
        .then(function(books){
            res.render('readmore',{nav,books})
        })

        
    });
    bookrouter.get('/update/:id',(req,res)=>{
        const id=req.params.id;
        bookdata.findOne({_id:id})
        .then (function(books){
            res.render('update',{nav,books,id})
        })

        
    });
    bookrouter.get('/delete/:id',(req,res)=>{
        const id=req.params.id;
        bookdata.deleteOne({_id:id})
        .then(function(books){
            res.render('book',
            {nav,books,success:"successfully deleted "});
        })

        
    });
    bookrouter.get('/updatebook/:id',(req,res)=>{
        const id=req.params.id;
        bookdata.findOne({_id:id})
        .then(function(books){
            res.render('updatebook',
            {nav,books,id});
        })

        
    });
    bookrouter.get('/',(req,res)=>{
        bookdata.find()
        .then(function(books){
            res.render('book',
            {nav,books,success:" "});
            console.log(books)
        })
        
       
    });
    return bookrouter
    

}

module.exports=router;
//module.exports.books=books