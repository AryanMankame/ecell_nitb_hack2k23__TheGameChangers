const mongoose = require('mongoose')
const express = require('express')
mongoose.set("strictQuery", false);
const bodyParser = require('body-parser');
const Router = express.Router()
const order = mongoose.Schema({
    name:String,
    emailUser:String,
    emailDelivery:String,
    address:String,
    phone:String,
    lat:Number,
    lng:Number,
})
var db = [
    {
      "email":"abc@gmail.com",
      "latitude":23.343,
      "longitude":12.343
    },
    {
      "email":"xyz@gmail.com",
      "latitude":123.343,
      "longitude":12.343
    },
    {
      "email":"def@gmail.com",
      "latitude":233.343,
      "longitude":12.343
    }
]
const Order = mongoose.model('orders',order)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const EarthRadius = 6371; // radius of the earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    lat1 = toRadians(lat1);
    lat2 = toRadians(lat2);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EarthRadius * c;
}
function toRadians(degree) {
    return degree * (Math.PI / 180);
}  
Router.get('/check',(req,res) => {
    console.log('doone')
    res.send("checking once")
})
Router.post('/loc',(req,res) => {
    db = [...db,req.body];
})
function bblSort(arr){
    
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j][0] > arr[j+1][0]){
           
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    // Print the sorted array
    return arr;
   }
Router.post('/sell',(req,res) => {
  console.log(req.body)
    const userLong = req.body.longitude;
    const userLat = req.body.latitude;
    var arr = []
    for(let i = 0;i<db.length;i++){
        let dist = Math.abs(Number(calculateDistance(userLat,userLong,db[i]["lat"],db[i]["lng"])))
        arr = [...arr,[dist,i]]
     }
      let out = bblSort(arr);
      // res.send(db[out[0][1]]["email"])
      var o1 = {
        name:req.body.name,
        emailUser:req.body.email,
        emailDelivery:db[out[0][1]]["email"],
        address:req.body.address,
        phone:req.body.phone,
        lat:req.body.lat,
        lng:req.body.lng,
      }
    const ord = new Order(o1)
    ord.save()
    .then(doc => {
      res.send(doc)
    })
    .catch(err => {
      res.send(err)
    })
})
Router.post('/neworder',(req,res) => {
    const ord = new Order(req.body)
    ord.save()
   .then(doc => {
     res.send(doc)
   })
   .catch(err => {
     res.send(err)
   })
})
Router.post('/getorders',(req,res) => {
        var ans = Order.find({"emailDelivery":req.body.email},(err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    });
}) 
Router.get('/getorders',(req,res) => {
  var ans = Order.find((err,data) => {
  if(err){
      res.status(500).send(err)
  }
  else{
      res.status(200).send(data)
  }
});
})  
Router.post('/updateloc',(req,res) => {
    for(let i = 0;i < db.length; i++){
      if(db[i]["email"] === req.email){
        db[i]["longitude"] = req.body.longitude;
        db[i]["latitude"] = req.body.latitude;
      }
    }
})
Router.post('/del',(req,res) => {
  console.log(req.body.id)
  Order.deleteMany({_id:req.body.id},(req,res) => {
    console.log('im deleted');
  });
})
module.exports = Router 