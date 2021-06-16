var express= require('express');

var app= express();

app.set('view engine','ejs');

app.listen(4000);

app.get('/home',(req,res)=> {
    res.render('home')
    res.status(200);
});

app.get('/',(req,res)=> {
    res.redirect('/home');
});

app.get('/login',(req,res)=> {
    res.render('singin');

});

app.get('/about',(req,res)=> {
    res.render('about');
});

app.get('/contact',(req,res)=> {
    res.render('contact');
});

app.get('/programms',(req,res)=> {
    res.render('program');
});

app.use((req,res)=> {
    res.render('404');
    res.status(404);
});