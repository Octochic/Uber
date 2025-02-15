const crypto = require('crypto');

const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');




function getOtp(num){
    function generateOtp(num){
        const otp= crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
        return otp;
    }

    return generateOtp(num);
}

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    console.log("Distance and Duration:", distanceTime);

    if (!distanceTime || !distanceTime.distance || !distanceTime.duration) {
        throw new Error("Invalid distance or duration from map service");
    }

    const distanceKm = distanceTime.distance.value / 1000; // Convert meters to km
    const durationMin = distanceTime.duration.value / 60; // Convert seconds to minutes

    console.log(`Converted Distance: ${distanceKm} km, Duration: ${durationMin} mins`);

    const RATES = {
        auto: { base: 25, perKm: 12, perMin: 1 },
        car: { base: 50, perKm: 15, perMin: 2 },
        motorcycle: { base: 20, perKm: 10, perMin: 0.5 }
    };

    const fares= {};
    for (const vehicle in RATES) {
        const rate = RATES[vehicle];
        fares[vehicle] = rate.base + (distanceKm * rate.perKm) + (durationMin * rate.perMin);
    }

    console.log("Calculated Fares:", fares);

    return fares;
}

module.exports.getFare = getFare;



module.exports.createRide = async({
    user, pickup, destination, vehicleType
})=>{
    if(!user|| !pickup|| !destination|| !vehicleType){
        throw new Error('All feilds are required');
    }

    const fare = await getFare(pickup, destination);

    console.log(fare);

    const ride= rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType]
    })

    return ride;
}   



