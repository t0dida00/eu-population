const mongoose = require("mongoose");

const countrySchema = {
    code: String,
    name: String,
    flag: String,
    population: Number
};



const Country = mongoose.model("Country", countrySchema);


module.exports = Country;
