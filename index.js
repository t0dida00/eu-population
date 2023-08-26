const express = require('express')
const app = express()
const connectToMongoDB = require('./services/dbConnection');

const cors = require('cors');
const cityRoutes = require("./routes/cityRoutes")
const countryRoutes = require("./routes/countryRoutes")
var apiResponse = require("./services/apiResponse");

app.use(cors());
const port = 3000
connectToMongoDB()

app.get('/', function (req, res) {
    res.send('Welcome to EU Population ...')
})

app.use("/", cityRoutes)
app.use("/", countryRoutes)

app.all("*", function (req, res) {
    return apiResponse.notFoundResponse(res, "Page not found");
});


app.listen(port, () => {
    console.log(`API server running at:${port}/`);
});
