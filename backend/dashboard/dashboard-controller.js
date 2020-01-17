const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://nirmal:trial@cluster0-dz5ux.mongodb.net/mydb?retryWrites=true&w=majority'
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit : '5mb'}));
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect(url , (err) => {
    if(err) throw err
})

const Schema = mongoose.Schema
const ItemsSchema = new Schema({
    name: {type : String},
    imageUrl: {type : String},
    storage : {type : String},
    display : {type : String},
    camera : {type : String},
    battery : {type : String},
    processor : {type : String},
    description : {type : String} ,
    cost : {type : Number}
})

const model = mongoose.model('items' , ItemsSchema)
const model1 = mongoose.model('cartitems',ItemsSchema)
const compareModel = mongoose.model('compareitems' , ItemsSchema)
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    next();
})
app.get('/dashboard', (req,res) => {
    model.find({} , (err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
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

app.post('/compare/remove' , (req,res) => {
    compareModel.remove({_id : req.body._id} , (err,data) => {
        if(err) res.send(err)
        else res.send(data)
    })
})
})
app.listen(8080)