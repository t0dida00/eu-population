const Country = require("../models/countryModel")
const apiResponse = require("../services/apiResponse");

const queryParser = require("../services/queryParser")

module.exports = {
    countryList: async (req, res) => {

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
