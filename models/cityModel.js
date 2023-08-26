const mongoose = require("mongoose");

const countrySchema = {
    code: String,
    name: String,
    flag: String,
    population: Number
};

const citySchema = {
    countrycode: String,
    name: String,
    capital: Boolean,
    population: Number
};



const City = mongoose.model("City", citySchema);


module.exports = City;
