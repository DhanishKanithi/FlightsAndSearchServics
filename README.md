#  Welcome to flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project 
- create a `.env` file in the root directory and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` 
```

## DB Design 
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can have multiple flights.
  - A city has many airports but one airport has only one city.
  - One airport can have many flights but a flightd belongs to one airport.

## Flights Table

- id - unique id to identify the flights 
