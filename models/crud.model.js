'use strict';

const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
	strDrink: String,
    strDrinkThumb: String,
    idDrink: String
});

const crudModel = mongoose.model('drinks', crudSchema);


module.exports = crudModel;