const axios = require('axios');

module.exports.getAddressCoordinate = async(address)=>{
    try {
        const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API;
        const encodedAddress = encodeURIComponent(address);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_API_KEY}`;
        
        const response = await axios.get(url);
        
        if (response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        }
        throw new Error('No coordinates found for this address');
    } catch (error) {
        throw new Error('Error getting coordinates: ' + error.message);
    }

}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    // Encode the origin and destination properly
    const originEncoded = encodeURIComponent(origin);
    const destinationEncoded = encodeURIComponent(destination);

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originEncoded}&destinations=${destinationEncoded}&key=${apiKey}`;

    console.log("Fetching distance and time from:", url); // Debugging

    try {
        const response = await axios.get(url);
        console.log("API Response:", response.data); // Debugging
        
        if (response.data.status === 'OK') {
            if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('Unable to fetch distance and time');
            }
            return response.data.rows[0].elements[0];    
        } else {
            throw new Error(`Google API Error: ${response.data.error_message || 'Unable to fetch distance and time'}`);
        }
    } catch (err) {
        console.error("Error fetching distance:", err);
        throw err;
    }
};

module.exports.getAutoCompleteSuggestions = async(input)=>{
    if(!input){
        throw new Error('Query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    // Encode the input for the URL
    const encodedInput = encodeURIComponent(input);
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedInput}&key=${apiKey}`;
    try{
        const response = await axios.get(url);
        if(response.data.status==='OK'){
            return response.data.predictions;
        }else{
            throw new Error('Unable to fetch suggestions');
        }
    }catch(err){
        console.error(err);
        throw err;
    }
}

    
