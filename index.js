const express = require('express'); 
const db = require('./config/database'); 
db.authenticate().then(() => console.log("Connected to Database")).catch(err=> console.log('Error occured'))



const app = express(); 

app.get('/',(req,res) => { 
  res.send('I will explore postgreSql and sequelize orm right now . Its been a problem for me for a long time. '); 
})

app.listen(5000,() => { 
  console.log('App is running on port 5000'); 
})