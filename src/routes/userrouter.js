var express = require('express');
var userrouter = express.Router();
const userdata = require('../model/userdata');
var bcrypt = require('bcrypt')

function router(nav) {
    userrouter.get('/signin', (req, res) => {

        res.render('signin', { nav });

    });

    userrouter.get('/signup', (req, res) => {
       res.render('signup');
    });

    userrouter.get('/register',(req,res) => {
        bcrypt.hash(req.query.password,10,(err,hashedPass) => {
            
            if (err) {
                res.send("error")
            }
            var user = {
                name: req.query.name,
                email: req.query.email,
                username: req.query.username,
                password: hashedPass,
                age: req.query.age
            }
            console.log(user)
            var udata = userdata(user)
            udata.save()
                .then(() => {
                    res.render('signin')
                })
        })
    })
    userrouter.get('/login',(req,res)=>{
        let user=req.query.username
        let pass=req.query.password
        userdata.findOne({username:user})
        .then(user=>{
            if(user){
                bcrypt.compare(pass,user.password,(err,result)=>{
                    if(err){
                        res.send("password incorrect")
                    }
                    if(result){
                        res.render('index',{nav})
                    }
                })
            }
            else{
                res.send("user not found")
            }
           

        })

    })

    return userrouter
}
module.exports = router;
