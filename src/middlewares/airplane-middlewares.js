const {ClientErrorCodes} = require('../utils/error-codes');

const validateCreateAirplane = (req,res,next) => {
    if(!req.body.modelNumber ||
        !req.body.capacity
    )
    {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            success : false,
            data : {},
            err: "Invalid request body for create airplane",
            message : "Missing mandatory properties for creating airplane"
        })
    }

    next();
}

module.exports = {validateCreateAirplane}
