const { CityService } = require("../services/index"); 

const cityService = new CityService();

/*
For create controller, we are going to use a POST request.
data -> req.body 
*/
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body); 
        return res.status(201).json( {
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        })
    }
    catch(error) {
        console.log(error);
        return res.status.json( {
            data : {},
            success : false,
            message : 'Not able to create a city',
            err : error
        })
    }
}



/*
For destroy controller operation, we are going to use DELETE method.
DELETE -> /city/:id
*/
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully deleted a city",
            err : {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city",
            err : error
        })
    }
}


/*
For get controller, we are going to use the GET method.
GET -> /city/:id
*/
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully retrieved information about a city",
            err : {}
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get the city",
            err : error
        })
    }
}


/*
For update controller, we are going to use the PATCH request
PATCH -> /city/:id -> req.body
*/
const update = async (req, res) => {
    try{
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully updated the data in the city",
            err : {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city",
            err : error
        })
    }
}


const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : cities,
            success : true,
            message : 'Successfully fetched all cities',
            err : {}
        }) ;
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch All data ",
            err : error
        })
    }
}


module.exports = {
    create, 
    destroy,
    get,
    update,
    getAll
}