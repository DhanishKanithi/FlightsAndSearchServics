const { response } = require('express');
const {AirplaneService} = require('../services/index');
const {SuccessCodes, ServerErrorCodes} = require('../utils/error-codes');

const airplaneService = new AirplaneService();

const create = async(req,res) => {
    try {
        const response = await airplaneService.createAirplane(req.body);
        return res.status(SuccessCodes.CREATED).json({
            success: true,
            data : response,
            message : "Successfully created a airplane",
            err: {}
        });
    } 
    catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            data : {},
            message: "Unable to create an airplane",
            err: error
        });
    }
}

const destroy = async(req,res) => {
    try {
        const response = await airplaneService.deleteAirplane(req.params.id);
        return res.status(SuccessCodes.OK).json({
            success: true,
            message: "Successfully deleted an airplane",
            data : response,
            err: {}
        })
    } 
    catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Unable to delete an airplane",
            data : {},
            err: error
        })
    }
}

const get = async(req,res) => {
    try {
        const response = await airplaneService.getAirplane(req.params.id);
        return res.status(SuccessCodes.OK).json({
            success: true,
            message: "Successfully fetched the details of an airplane",
            data: response,
            err: {}
        })
    } 
    catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Unable to fetch the details of an airplane",
            data : {},
            err: error
        })
    }
}

const getAll = async(req,res) => {
    try {
        const response = await airplaneService.getAllAirplanes(req.query);
        return res.status(SuccessCodes.OK).json({
            success: true,
            message: "Successfully fetched all the details of airplanes",
            data: response,
            err: {}
        })
    } 
    catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: "Unable to fetch the details of all the airpllanes",
            data: {},
            err: error
        })
    }
}

const update = async(req,res) => {
    try {
        const response = await airplaneService.updateAirplane(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            success: true,
            message: "Successfully updated the details of airplane",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Unable to update the details of airplane",
            data : {},
            err : error
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