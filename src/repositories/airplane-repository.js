const {Airplane} = require('../models/index');
const {Op} = require('sequelize');

class AirplaneRepository {
    async createAirplane(data) {
        try {
            const airplane = await Airplane.create(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
             await Airplane.destroy({
                where : {
                    id : airplaneId
                }
            });
            return true;
        } 
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        }
        catch(error) {
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
    }

    async getAllAirplanes(filter) {     // filter can be empty also
        try {
              if(filter.name) {
                const airplanes = await Airplane.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return airplanes;
            }
            const airplanes = await Airplane.findAll();
            return airplanes;
        } 
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data) {
        try {
            await Airplane.update(data, {
                where : {
                    id : airplaneId
                }
            });
        } 
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;