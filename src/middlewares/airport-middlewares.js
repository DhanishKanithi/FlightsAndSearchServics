const {ClientErrorCodes} = require('../utils/error-codes');

const validateCreateAirport = (req,res, next) => {
    if(!req.body.name ||
        !req.body.cityId
    ) 
    {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            success : false,
            data : {},
            message : 'Invalid request body for creating airport',
            error : 'Missing mandatory properties for creating airport'
        })
    }

    next();
}

module.exports = {validateCreateAirport}