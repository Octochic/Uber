const express = require('express');
const captainController = require('../controllers/captain.controller');
const router = express.Router();
const {body} = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be at least 3 characters long'),         
            body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
            body('vehicle.color').isLength({min:3}).withMessage('Colour must be atleast 3 characters long'),
            body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 characters long'),
            body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be atleast 1'),
                body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle or auto'),
], captainController.registerCaptain)







module.exports = router;