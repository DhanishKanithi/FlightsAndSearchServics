const {AirplaneRepository} = require('../repositories/index');

class AirplaneService {
    constructor() {
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createAirplane(data) {
        try {
            const airplane = await this.AirplaneRepository.createAirplane(data);
            return airplane;
        } 
        catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
           const response = await this.AirplaneRepository.deleteAirplane(airplaneId);
           return response;
        } 
        catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
    
    async getAirplane(airplaneId) {
        try {
            const airplane = await this.AirplaneRepository.getAirplane(airplaneId);
            return airplane;
        } 
        catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAllAirplanes(filter) {
        try {
            const airplanes = await this.AirplaneRepository.getAllAirplanes({name : filter.name});
            return airplanes;
        } 
        catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data) {
        try{
            const response = await this.AirplaneRepository.updateAirplane(airplaneId, data);
            return response;
        }
        catch(error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
}

module.exports = AirplaneService;