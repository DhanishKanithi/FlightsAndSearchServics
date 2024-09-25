const {City} = require("../models/index");

class CityRepository {
    async createCity( {name}) {
        try {
            const city = await City.create({name});
            return city;
        }
        catch (error) {
            throw {error};
        }
    }


    async deleteCity(  cityId ) {
        try {
            await City.destroy({
                where : {
                    id: cityId
                }
            });
            return true;
        }
        catch(error) {
            throw {error};
        }
    }

    async updateCity(cityId, data) { // data => {name : "Dhanish"}
        try {
            /*

            The below method also works but will not return any updated object.
            If we are using Pg then `returning : true` can be used. Else not... 
            const city = await City.update(data, {
                where : {
                    id : cityId 
                }
                });
                */

            /* For getting updated data in SQL we use the below approach */
            const city = await City.findByPk(cityId);
            city.name = data.name; 
            await city.save();
        
            return city; 
        }
        catch(error) {
            throw {error};
        }
     }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }

        catch(error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;