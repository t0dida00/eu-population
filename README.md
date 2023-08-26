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

The user can query data by conditions
    
| Query  | Type   | Description                             | Value sample | Response                                                      | Response sample                                      |
| ------ | ------ | --------------------------------------- | ------------ | ------------------------------------------------------------ | ---------------------------------------------------- |
| search | String | To search data by a given string       | FI           | Returns an object that includes an array of country data objects, status, and message |




- GET `/cities?country={CODE}`
  - Returns an array of city objects belonging to the given country/countries
    - Example object:
    ```json
    {
      "countrycode": "FIN",
      "name": "Helsinki",
      "capital": true,
      "population": 658864
    }
    ```
  - The `country` parameter is the three character ISO country code
  - Supports multiple values, for example `?country=FIN&country=SWE`

## Running

You can run the backend server either with [npm](https://docs.npmjs.com/) or in [Docker](https://www.docker.com/) container.

### With npm

1. Install dependencies: `npm install`.
2. Start the server: `npm start`.

The API can be then accessed at `http://localhost:3001`.

### With Docker

 If you have an older version of Docker that does not have Compose V2, substitute the `docker compose` commands with `docker-compose`.

To create and run the backend container, run in this folder:

```
docker compose up
```

This will build the image (if it does not exist) and run a container named `population_backend`.

The API can be then accessed at `http://localhost:3001`.

If you are calling the API from another Docker container, you need to create a network (`docker network create <networkName>`) and attach both containers to it (`docker network connect <networkName> <containerName>`). Then the API can be accessed at `http://population_backend:3001`).
