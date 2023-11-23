const express = require("express")
const cityControllers = require("../controllers/cityControllers")


const router = express.Router();

router.get("/cities", cityControllers.cityList)

//testing here 


module.exports = router;
