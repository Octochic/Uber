const captainModel = require('../models/captain.model');
const captainservice = require('../services/captain.service');
const {validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email, fullname, password, vehicle, capacity} = req.body;
    const isCaptainalreadyExist = await captainModel.findOne({email});
    if(isCaptainalreadyExist){
        return res.status(400).json({error: 'Captain already exist'});
    }


    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainservice.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token, captain});
}