const express = require ('express');
const app = express();
const path=require('path')
const bodyparser=require("body-parser");
const router = require('./router.js')
const session = require('express-session');

const port = process.env.PORT||3000;

app.set('view engine','ejs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public','assets')));

app.use(session({
    secret:'secret',
    resave:false,
    saveUnitialized:true
}))
app.use('/route', router);20


app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"})
})

app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")});