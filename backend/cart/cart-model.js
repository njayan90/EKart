const mongodb = require('mongodb');
const url = "mongodb+srv://nirmal:trial@cluster0-dz5ux.mongodb.net/mydb?retryWrites=true&w=majority"

mongodb.connect(url,(err,response) => {
    if(err) throw err;
    const db = response.db('mydb')
    db.createCollection('cartitems' , (err) => {
        if(err) throw err
        response.close()
    })
   
})