const {ClientErrorCodes} = require('../utils/error-codes');

const validateCreateCity = (req,res,next) => {
    if(!req.body.name) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for create city",
            err: "Missing mandatory properties for creating city(i.e, city_name)"
        });
    }
    next();
}

module.exports = {validateCreateCity}