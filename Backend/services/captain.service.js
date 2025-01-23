const captainModel = require('../models/captain.model');
module.exports.createCaptain = async ({
    email, firstname, lastname, password, color, plate, vehicleType, capacity
}) => {
    if(!email || !firstname || !lastname || !password || !color || !plate || !vehicleType || !capacity){
        throw new Error('Please fill in all fields');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            vehicleType,
            capacity
        }
    });
    
    return captain;
}