const captainModel = require('../models/captain.model');
const captainservice = require('../services/captain.service');
const {validationResult} = require('express-validator');
const BlacklistTokenModel = require('../models/blacklistToken.model');


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

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email, password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json({error: 'Invalid email & password'});
    }


    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({error: 'Invalid email or password'});
    }


    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.cookie(200).json({token, captain});
}

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(400).json({ message: 'No token found' });
    }
    await BlacklistTokenModel.create({ token });
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logout successful' });
}
