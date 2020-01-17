const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://nirmal:trial@cluster0-dz5ux.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(url, (err, response) => {
    if (err) throw err;

    const db = response.db('mydb')
    db.createCollection('items'), (err) => {
        if (err) throw err
    }
    const data = [
        {
            name: 'Redmi 8',
            imageUrl: 'https://rukminim1.flixcart.com/image/200/200/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70',
            storage : '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
            display : '15.8 cm (6.22 inch) HD+ Display',
            camera : '12MP + 2MP | 8MP Front Camera',
            battery : '5000 mAh Battery',
            processor : 'Qualcomm Snapdragon 439 Processor',
            description : 'If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.',
            cost : 7999
        },    
        {
            name: 'Redmi Note 7 Pro ',
            imageUrl: 'https://rukminim1.flixcart.com/image/416/416/jt641ow0/mobile/d/w/k/mi-redmi-note-7-pro-na-original-imafe4bbyfppbnuu.jpeg?q=70',
            storage : '4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
            display : '16.0 cm (6.3 inch) Full HD+ Display',
            camera : '48MP + 5MP | 13MP Front Camera',
            battery : '4000 mAh Li-polymer Battery',
            processor : 'Qualcomm Snapdragon 675 Processor',
            description : 'Whether it’s work or entertainment, the Redmi Note 7 Pro challenges all odds and provides a truly immersive and enriched smartphone experience. Its 2.0 GHz Qualcomm Snapdragon 675 processor makes multitasking easy and it also comes with a (48 MP + 5 MP) dual-rear camera and a 13 MP front camera which let you click truly beautiful pictures. What’s more, the Face Unlock features makes unlocking this phone a piece of cake.',
            cost : 9999
        },
        {
            name: 'Redmi 8A',
            imageUrl: 'https://rukminim1.flixcart.com/image/416/416/k0y6cnk0/mobile/u/e/p/mi-redmi-8a-mzb8458in-original-imafkmhycvhcsrzm.jpeg?q=70',
            storage : '3 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
            display : '15.8 cm (6.22 inch) HD+ Display',
            camera : '12MP Rear Camera | 8MP Front Camera',
            battery : '5000 mAh Battery',
            processor : 'Qualcomm Snapdragon 439 Processor',
            description : 'The Redmi 8A features a 5000-mAh high-capacity battery, so you can watch more videos, click more pictures, play more games on a single charge. What’s more? It also supports 18 W Fast Charge, so you can get back in action, in no time.',
            cost : 6999
        }
    ]

    db.collection('items').insertMany(data, (err) => {
        if (err) throw err
        response.close();
    })
})