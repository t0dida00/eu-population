const Country = require("../models/countryModel")
const apiResponse = require("../services/apiResponse");
const queryParser = require("../services/queryParser")

const { validCountryQueryParams } = require("../constants/index")
module.exports = {
    countryList: async (req, res) => {

        const wrongQuery = Object.keys(req.query).filter(param => !validCountryQueryParams.includes(param));

        if (wrongQuery.length > 0) {
            return apiResponse.notFoundResponse(res, "Oops ! You entered wrong query, let's check again");

        }

        const query = queryParser(req.query)

        delete query.countrycode

        const countries = await Country.find(query)
        if (countries.length > 0) {
            return apiResponse.successResponseWithData(res, "Operation success", countries);
        }
        else {
            apiResponse.notFoundResponse(res, "Can't find country by conditions");
        }

    }

}
