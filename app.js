const express = require('express'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const employe = require('./models/employe');
const employeRoutes = require('./routes/employe');
const userRoutes = require('./routes/user');


const app= express(); 

mongoose.connect('mongodb+srv://Moncef_test1:mon123@cluster0.1j8qw.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie 222222 !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json()); 

  app.use('/api/employe', employeRoutes);
  app.use('/api/user', userRoutes);
  

  
module.exports=app ; 