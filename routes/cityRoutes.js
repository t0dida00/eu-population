const express = require("express")
const cityControllers = require("../controllers/cityControllers")

const router = express.Router();

router.get("/cities", cityControllers.cityList)
router.get("/cities1", cityControllers.cityList)

router.get("/cities2", cityControllers.cityList)

router.get("/cities3", cityControllers.cityList)
router.get("/cities4", cityControllers.cityList)
router.get("/cities5", cityControllers.cityList)


module.exports = router;
