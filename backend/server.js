// const express = require('express')
// // const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose')
// const url = "mongodb+srv://nirmal:trial@cluster0-dz5ux.mongodb.net/mydb?retryWrites=true&w=majority";

// const db = mongoose.connect(url , {useNewUrlParser: true}, (err) => {
//     if(err) console.log(err);
// })

// const app = express();
// // app.use(bodyParser());
// // app.use(bodyParser.json({limit : '5mb'}));
// // app.use(bodyParser.urlencoded({extended:true}))
// app.use((req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
//     // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//     // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//     // res.setHeader('Access-Control-Allow-Credentials', true)
//     next();
// })

// const Schema = mongoose.Schema;
// const ItemsSchema = new Schema({
//     name : {type : String},
//     addedToCart : {type : Boolean},
//     imageUrl : {type : String}
// },{ collection : 'items' })

// const model = mongoose.model('items' , ItemsSchema)

// app.get('/dashboard',  (req, res) => {
//      model.find((err, data) => {
//         if (err) {
//             res.send(err)
//         }
//         else {
//             res.send(data)
//         }
//      })
// })

// app.listen(8080, () => {
//     console.log('listen')
// })


// // MongoClient.connect(url , (err,db) => {
// //     if(err){
// //         throw err;
// //     }
// //     const dbo = db.db("mydb")
// //     const data = [
// //         {
// //           name : 'Redmi 8',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70',
// //         },
// //         {
// //           name : 'Redmi 8A',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70'
// //         },
// //         {
// //           name : 'Realme 5',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jzd0qkw0/mobile/h/3/c/realme-5-rmx1911-original-imafje8bfnzya5ty.jpeg?q=70'
// //         },
// //         {
// //           name : 'Redmi Note 7S',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jw5a2kw0/mobile/p/z/5/oppo-reno-10x-zoom-cph1919-original-imafgwaxgbmhjhzc.jpeg?q=70'
// //         },
// //         {
// //           name : 'Realme C2',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jzd0qkw0/mobile/h/3/c/realme-5-rmx1911-original-imafje8bfnzya5ty.jpeg?q=70'
// //         },
// //         {
// //           name : 'Redmi Note 7S',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jw5a2kw0/mobile/p/z/5/oppo-reno-10x-zoom-cph1919-original-imafgwaxgbmhjhzc.jpeg?q=70'
// //         },
// //         {
// //           name : 'Realme 5',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/jzd0qkw0/mobile/h/3/c/realme-5-rmx1911-original-imafje8bfnzya5ty.jpeg?q=70'
// //         },
// //         {
// //           name : 'Redmi 8A',
// //           addedToCart : false,
// //           imageUrl : 'https://rukminim1.flixcart.com/image/200/200/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70'
// //         },
// //       ]
// //    dbo.collection('items').insertMany(data,(err,res) => {
// //        if(err) throw err;
// //    })

   
// // }) 



