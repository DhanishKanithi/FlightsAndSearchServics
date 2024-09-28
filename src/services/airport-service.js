const { AirportRepository } = require("../repositories/index");

class AirportService {
    constructor() {
        this.AirportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.AirportRepository.createAirport(data);
            return airport;
        }
        catch (error) {
            throw {error};
        }
    }

    async deleteAirport(airportId) {
        try{
            const response = await this.AirportRepository.deleteAirport(airportId);
            return response;
        }
        catch(error) {
            throw {error}; 
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await this.AirportRepository.updateAirport(airportId, data);
            return airport;
        }
        catch (error) {
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.AirportRepository.getAirport(airportId);
            return airport;
        }
        catch (error) {
            throw {error};
        }
    }

    async getAllAirports(filter) {
        try {
            const airports = await this.AirportRepository.getAllAirports({name : filter.name});
            return airports;
        }
        catch(error) {
            throw {error};
        }
    }
}

module.exports = AirportService;