'use strict';

const crudModel = require('../models/crud.model');

const createData = (req, res) => {
	const {	strDrink, strDrinkThumb, idDrink} = req.body;

	crudModel.find({idDrink: idDrink}, (error, data)=>{
		if(error){
			res.send(error);
		} else {
			const data = new crudModel({
				strDrink: strDrink,
				strDrinkThumb: strDrinkThumb,
				idDrink: idDrink,
			});

			data.save();
			res.send(data);
		}
	})
}


const readData = (req, res) => {
	crudModel.find({}, (error, data) => {
		if(error){
			res.send(error);
		} else {
			res.send(data);
		}	
	});
}


const deleteData = (req, res) => {
	const idDrink = req.params.idDrink;

	crudModel.remove({idDrink: idDrink}, (error, data)=>{
		if(error){
			res.send(error);
		} else {
			crudModel.find({}, (error, data) => {
				if(error){
					res.send(error);
				} else {
					res.send(data);
				}	
			});
		}
	})
}

const updateData = (req, res)=>{
	const idDrink_1 = req.params.idDrink;
	const {	strDrink, strDrinkThumb, idDrink } = req.body;

	crudModel.findOne({idDrink: idDrink_1}, (error, data) =>{
		if(error){
			res.send(error);
		} else {
			data.strDrink = strDrink;
			data.strDrinkThumb = strDrinkThumb;
			data.idDrink = idDrink;

			data.save();
		}	
	}).then(()=> {
		crudModel.find({}, (error, data) => {
			if(error){
				res.send(error);
			} else {
				res.send(data);
			}	
		});
	})
}

module.exports = {createData, readData, deleteData, updateData}