# Population backend

A Node.JS backend server with MVC architecture.

The backend serves a JSON REST API with the following endpoints:

- GET `/countries`

  - Returns an object that includes an array of country data objects, status and message
    - Example object:
    ```json
    {
    "status": 1,
    "message": "Operation success",
    "data": [
          {
            "name": "Finland",
            "code": "FIN",
            "flag": "\uD83C\uDDEB\uD83C\uDDEE",
            "population": 5530719
          }
            ]
    }
    ```

The user can query data by conditions :  GET `/countries?query={value}`
    
| Query  | Type   | Description                             | Value sample | Response                                                      | Response sample                                      |
| ------ | ------ | --------------------------------------- | ------------ | ------------------------------------------------------------ | ---------------------------------------------------- |
| search | String | To search data by a given string <br> <br> Can search by name or countrycode,``` for example: search=esp or search=spain is same the result ```     | FI           | Returns an object that includes an array of country data objects, status, and message | <img width="373" alt="Screenshot 2023-08-27 at 1 09 59" src="https://github.com/t0dida00/eu-population/assets/70305254/4362c676-8d2e-4c31-a7bc-c78f40b6c687">
| population | Number | To search data by population      |  50000000    | Returns an object that includes an array of country data objects, status, and message | <img width="373" alt="Screenshot 2023-08-27 at 1 09 59" src="https://github.com/t0dida00/eu-population/assets/70305254/b0c9020b-e99a-4e56-978f-2524e81b9a7e">
| country | String | To search data by countrycode  |  FIN    | Returns an object that includes an array of country data objects, status, and message| <img width="391" alt="Screenshot 2023-08-27 at 1 16 06" src="https://github.com/t0dida00/eu-population/assets/70305254/ad4b97d3-e537-44a8-9cee-89511adf5c04">

* Supports multiple country values, for example `?country=FIN&country=SWE`
* Supports queries with different conditions, for example `?country=FIN&country=SWE&population=10000000` or `?searcch=FI&population=10000000`
* The `country` parameter is the three character ISO country code



- GET `/cities`
  - Returns an object that includes an array of country data and cities belonging to it, status, and message
    - Example object:
    ```json
    {
          "status": 1,
          "message": "Operation success",
          "data": [
              {
              "country": {
                  "_id": "64e8568a30e596647562da49",
                  "code": "HUN",
                  "name": "Hungary",
                  "flag": "\\uD83C\\uDDED\\uD83C\\uDDFA",
                  "population": 9749763
              },
              "cities": [
              {
                  "_id": "64e8567430e596647562d9e0",
                  "countrycode": "HUN",
                  "name": "Budapest",
                  "capital": true,
                  "population": 1706851
              }
                        ]
            }
                ]      
     }
    ```
* Supports multiple country values, for example `?country=FIN&country=SWE`
* Supports queries with different conditions, for example `?country=FIN&country=SWE&population=10000000` or `?searcch=FI&population=10000000`

## Running

You can run the backend server either with [npm](https://docs.npmjs.com/) or in [Docker](https://www.docker.com/) container.

### With npm

1. Install dependencies: `npm install`.
2. Start the server: `npm start`.

The API can be then accessed at `http://localhost:3000`.

### With Docker

 If you have an older version of Docker that does not have Compose V2, substitute the `docker compose` commands with `docker-compose`.

To create and run the backend container, run in this folder:

```
docker compose up
```

This will build the image (if it does not exist) and run a container named `eu-population`.

The API can be then accessed at `http://localhost:3000`.
