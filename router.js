var express = require("express");
var router = express.Router();
const credential = {
    email: "admin@gmail.com",
    password: "admin123"
};



router.post('/login', (req, res) => {
    if (req.body.email === credential.email && req.body.password === credential.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
    } else {
        // Invalid credentials
        res.render('base', { invalidcred: true, message: "Wrong username/password." });
    }
});




router.get('/dashboard',(req,res) => {
    if(req.session.user){
    res.render('dashboard',{user:req.session.user})
    } else {
        res.send("Unauthorised User")
    }
})

router.get('/logout',(req,res) => {
    req.session.destroy(function(err){
        if (err) {
            console.log(err);
            res.send("Error");
        }else{
            res.render('base',{title:'express',logout:"logout successful"})
        }
    })
})



module.exports = router;