const City = require("../models/cityModel")
const Country = require("../models/countryModel")
const apiResponse = require("../services/apiResponse");
const queryParser = require("../services/queryParser")
const validQueryParams = ['search', 'country', 'population'];

module.exports = {
    cityList: async (req, res) => {

        const wrongQuery = Object.keys(req.query).filter(param => !validQueryParams.includes(param));

        if (wrongQuery.length > 0) {
            return apiResponse.notFoundResponse(res, "Oops ! You entered wrong query, let's check again");

        }


        const query = queryParser(req.query)

        const country_query = query.code ? { code: query.code } : {}
        delete query.code

        const countries = await Country.find(country_query)

        const cities = await City.find(query);

        const countriesWithCities = countries.map(country => ({
            country: country,
            cities: cities.filter(city => city.countrycode === country.code)
        })).filter(countryWithCities => countryWithCities.cities.length > 0);
        //.filter(countryWithCities => parseInt(query.population.$gte, 10) > 0 ? countryWithCities.cities.length > 0 : true);

        if (countriesWithCities.length > 0) {
            return apiResponse.successResponseWithData(res, "Operation success", countriesWithCities);

        }
        else {
            return apiResponse.notFoundResponse(res, "Can't find cities by given conditions");

        }
    }

}
