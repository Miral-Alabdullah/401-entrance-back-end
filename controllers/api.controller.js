'use strict';

const axios = require("axios");

const getData = (req, res) => {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
	axios.get(url).then(info=> {
		const shortcut = info.data.drinks;
		res.send(shortcut);
		shortcut.save();
	}).catch(err=>{
		res.send(err);
	})
}

module.exports = getData;