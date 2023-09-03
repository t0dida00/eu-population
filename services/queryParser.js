

function queryParser(query) {
    var options = {}

    const rawCodes = query.country;
    const codes = typeof rawCodes === 'string' ? [rawCodes] : rawCodes || [];
    const population = query.population ? query.population : 0;
    const searchQuery = query.search ? query.search : null

    if (codes.length != 0) {
        options.code = { $in: codes }
        options.countrycode = { $in: codes }

    }

    options.population = { $gte: population }
    if (searchQuery) {
        options["$or"] = [
            { name: { $regex: new RegExp(`^${searchQuery}`, "i") } },
            { code: { $regex: new RegExp(`^${searchQuery}`, "i") } }
        ]
    }

    return options
}



module.exports = queryParser