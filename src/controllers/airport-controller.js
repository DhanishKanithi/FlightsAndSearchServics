const {AirportService} = require('../services/index');
const {SuccessCodes, ServerErrorCodes} = require('../utils/error-codes');

const airportService = new AirportService();

const create = async(req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            message : 'Successfully created the Airport',
            err: {},
            data: response,
            success : true
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        });
    }
}

const destroy = async(req,res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(SuccessCodes.OK).json({
            message: 'Successfully deleted a airport',
            err: {},
            success: true,
            data: response
        });
    } 
    catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            message: "Unable to delete the airport",
            success: false,
            err: error
        });
    }
}

const get = async(req,res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            err: {},
            message: "Successfully fetched the details of the airport.",
            success:true
        });
    } 
    catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            data: {},
            error: error,
            message: "Unable to fetch the details of the airport"
        });
    }
}

const getAll = async(req,res) => {
    try {
        const response = await airportService.getAll();
        return res.status(SuccessCodes.OK).json({
            success: true,
            data: response,
            message: 'Successfully fetched details of all the airports',
            error : {}
        })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            data: {},
            error: error,
            message: 'Unable to fetch details of all airports'
        })
    }
}

const update = async(req, res) => {
    try {
        const response = await airportService.update(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            success: true,
            message: 'Successfully updated the details of the airport',
            data : response,
            error : {}
        })
    } 
    catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message : "Unable to update the details of airport",
            data : {},
            error: error
        })
    }
}




module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}