'user strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
mongoose.connect('mongodb://localhost:27017/DB_NAME',{ useNewUrlParser: true, useUnifiedTopology: true });

const getData = require('./controllers/api.controller');
const {createData, readData, deleteData, updateData} = require('./controllers/crud.controller');

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
	res.send('Hello World!');
});

app.get('/drinks', getData);

app.post('/drink', createData);
app.get('/drink', readData);
app.delete('/drink/:idDrink', deleteData);
app.put('/drink/:idDrink', updateData);

app.listen(PORT, ()=> {console.log('This server is working on', PORT);})