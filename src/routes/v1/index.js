const express = require("express");

const {FlightMiddlewares, CityMiddlewares, AirportMiddlewares} = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city',
    CityMiddlewares.validateCreateCity,
    CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);


router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);


router.post('/airports', 
    AirportMiddlewares.validateCreateAirport,
    AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.patch('/airports/:id' , AirportController.update);
router.get('/airports', AirportController.getAll);


module.exports = router; 