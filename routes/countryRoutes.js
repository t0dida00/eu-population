const express = require("express")
const countryControllers = require("../controllers/countryControllers")

const router = express.Router();

router.get("/countries", countryControllers.countryList)


module.exports = router;
