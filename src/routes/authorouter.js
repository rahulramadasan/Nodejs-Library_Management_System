var express=require('express');
var authorouter = express.Router();
const authordata=require('../model/authordata')


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
    ]


var author=[{
    name:"Ashis Ray",
    about:"Ashis Ray made his debut as a test match commentator in 1975. He was the only Asian ball-by-ball commentator on the 1983 World Cup."
},
{
    name:"Dr. A.P.J. Abdul Kalam",
    about:"He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering."

},
{
    name:"Dr. Bibek Debroy",
    about:"Bibek Debroy (born 25 January 1955) is the Chairman of the PM's Economic Council. Debroy has made significant contributions to game theory, economic theory"

}
]*/


authorouter.get('/:id',(req,res)=>{
    const id=req.params.id;
    
    authordata.findOne({name:id})
    .then(function(author){
        console.log(author)
        res.render('author',{nav,author})
     
    })
    
   
});

authorouter.get('/',(req,res)=>{
    authordata.find()
    .then(function(author){
        res.render('authors',{nav,author});
    })
    
});
return authorouter

}


module.exports=router;