const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://nirmal:trial@cluster0-dz5ux.mongodb.net/mydb?retryWrites=true&w=majority'
const bodyParser = require('body-parser')
const model = require('./dashboard-model')
const model1 = require('../cart/cart-model')
const compareModel = require('../compare/compare-model')
const userModel = require('../user/user-model')
const bcrypt = require('bcryptjs')

const app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit : '5mb'}));
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect(url , (err) => {
    if(err) throw err
})

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    next();
})
app.get('/dashboard', (req,res) => {
    const pageSize = +req.query.pageSize
    const currentPage = +req.query.currentPage
    if(req.query.sortCategory==="new"){
        model.find({ 'name' : { '$regex' : req.query.name, '$options' : 'i' }} , (err,data) => {
            if(err) res.send(err)
            else res.send(data)
        }).skip(pageSize * (currentPage -1)).limit(pageSize)
    }
    else if(req.query.sortCategory==="lowToHigh"){
        model.find({ 'name' : { '$regex' : req.query.name, '$options' : 'i' }} , (err,data) => {
            if(err) res.send(err)
            else res.send(data)
        }).sort({cost : 1}).skip(pageSize * (currentPage -1)).limit(pageSize)
    }
    else{
        model.find({ 'name' : { '$regex' : req.query.name, '$options' : 'i' }} , (err,data) =>{
            if(err) res.send(err)
            else res.send(data)
        }).sort({cost : -1}).skip(pageSize * (currentPage -1)).limit(pageSize)
    }
})

app.post('/cart/insert', (req, res) => {
    const mod = new model1(req.body)
    mod.save((err, data) => {
        if (err) res.send(err)
        else res.send(data)
    })
})

app.get('/cart',(req,res) => {
    model1.find({} , (err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
})

app.post('/cart/remove' , (req,res) => {
    model1.remove({_id : req.body._id} , (err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
})

app.post('/compare/insert' , (req,res) => {
    const mod = new compareModel(req.body)
    mod.save((err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
})

app.get('/compare' , (req,res) => {
   compareModel.find({} , (err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
})
app.post('/compare/remove' , (req,res) => {
    compareModel.remove({_id : req.body._id} , (err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
})

app.post('/dashboard/search' , (req,res) => {
    model.find({ 'name' : { '$regex' : req.body.name, '$options' : 'i' } } , (err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
    
})

app.post('/users/signup' , (req,res) => {
    bcrypt.hash(req.body.password , 10).then(hash => {
        const user = new userModel({
            email : req.body.email,
            password : hash
        })
        user.save((err,data) => {
            if(err) res.send(err)
            else res.send(data)
        })
    })
})

app.listen(8080)