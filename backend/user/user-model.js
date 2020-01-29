const mongodb = require('mongodb')
const url = "mongodb+srv://nirmal:trial@cluster0-dz5ux.mongodb.net/mydb?retryWrites=true&w=majority"
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true}
})

module.exports = mongoose.model('users' , userSchema)

mongodb.connect(url , (err,response) => {
    if(err) throw err
    const db = response.db('mydb')
    db.createCollection('users' , (err,res) => {
        if(err) throw err
        response.close()
    })
})