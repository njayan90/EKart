const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://nirmal:trial@cluster0-dz5ux.mongodb.net/test?retryWrites=true&w=majority'
const mongoose = require('mongoose')

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

module.exports = mongoose.model('items' , ItemsSchema)

MongoClient.connect(url, (err, response) => {
    if (err) throw err;

    const db = response.db('mydb')
    db.createCollection('items'), (err) => {
        if (err) throw err
    }
})