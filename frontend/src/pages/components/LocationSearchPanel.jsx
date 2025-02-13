// import React from 'react'

// const LocationSearchPanel = (props) => {
// console.log(props);

// //sample array for location
// const locations= [
//     "24B, Near Kapoor's cafe, Time Square, Newyork",
//     "22G, Near Kapoor's cafe, Time Square, Newyork",
//     "29C, Near Kapoor's cafe, Time Square, Newyork",
//     "32A, Near Kapoor's cafe, Time Square, Newyork"  
// ]




//   return (
//     <div>
//         {/* {this is sample data} */}
//         {
//             locations.map(function(elem,idx){
//                 return <div key={idx} onClick={()=>{
//                     props.setvehiclePanel(true)
//                     props.setpanelOpen(false)
//                 }} className='flex items-center gap-4  px-2 border-2 border-white active:border-black rounded-xl my-4 justify-start'> 
//                 <h2 className='bg-[#eee] h-12 w-14 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
//                 <h4 className='text-lg'> 
//                     {elem}
//                 </h4>
//             </div>
//             })
//         }

        
//     </div>
//   )
// }

// export default LocationSearchPanel




//location search panel

import React, { useState, useEffect, useRef } from 'react';

const LocationSearchPanel = ({ setpanelOpen, setvehiclePanel, searchText, type, setPickup, setDestination }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [serviceError, setServiceError] = useState(null);
    const autoCompleteService = useRef(null);

    useEffect(() => {
        const initService = () => {
            try {
                if (window.google && !autoCompleteService.current) {
                    autoCompleteService.current = new window.google.maps.places.AutocompleteService();
                    setServiceError(null);
                }
            } catch (error) {
                console.error('Service initialization error:', error);
                setServiceError('Failed to initialize location service');
            }
        };

        if (window.google) {
            initService();
        } else {
            window.addEventListener('google-maps-loaded', initService);
            return () => window.removeEventListener('google-maps-loaded', initService);
        }
    }, []);

    useEffect(() => {
        if (!searchText || searchText.length < 2 || !autoCompleteService.current) {
            setSuggestions([]);
            return;
        }

        setLoading(true);
        const fetchPlaces = () => {
            const request = {
                input: searchText,
                componentRestrictions: { country: 'IN' },
                types: ['geocode', 'establishment'],
                fields: ['formatted_address', 'geometry', 'name']
            };

            autoCompleteService.current.getPlacePredictions(request, (predictions, status) => {
                setLoading(false);
                if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
                    console.log('Predictions received:', predictions);
                    setSuggestions(predictions);
                } else {
                    console.log('No predictions or error:', status);
                    setSuggestions([]);
                }
            });
        };

        const timeoutId = setTimeout(fetchPlaces, 300);
        return () => clearTimeout(timeoutId);
    }, [searchText]);

    const handleLocationSelect = (prediction) => {
        if (type === 'pickup') {
            setPickup(prediction.description);
        } else {
            setDestination(prediction.description);
        }
        setVehiclePanel(true);
        setpanelOpen(false);
    };

    return (
        <div className="space-y-2">
            {loading && (
                <div className="text-center py-4">
                    <span className="text-gray-500">Searching locations...</span>
                </div>
            )}

            {!loading && suggestions.map((prediction) => (
                <div 
                    key={prediction.place_id}
                    onClick={() => handleLocationSelect(prediction)}
                    className="flex items-center gap-4 px-4 py-3 border border-transparent hover:border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-all"
                >
                    <div className="bg-[#eee] h-12 w-12 flex items-center justify-center rounded-full">
                        <i className="ri-map-pin-fill text-xl"></i>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-base font-medium">
                            {prediction.structured_formatting.main_text}
                        </h4>
                        <p className="text-sm text-gray-500">
                            {prediction.structured_formatting.secondary_text}
                        </p>
                    </div>
                </div>
            ))}

            {!loading && suggestions.length === 0 && searchText && searchText.length >= 2 && (
                <div className="text-center py-4">
                    <span className="text-gray-500">No locations found</span>
                </div>
            )}
        </div>
    );
};

export default LocationSearchPanel;


