import React from 'react'

const LocationSearchPanel = (props) => {
console.log(props);

//sample array for location
const locations= [
    "24B, Near Kapoor's cafe, Time Square, Newyork",
    "22G, Near Kapoor's cafe, Time Square, Newyork",
    "29C, Near Kapoor's cafe, Time Square, Newyork",
    "32A, Near Kapoor's cafe, Time Square, Newyork"  
]




  return (
    <div>
        {/* {this is sample data} */}
        {
            locations.map(function(elem,idx){
                return <div key={idx} onClick={()=>{
                    props.setvehiclePanel(true)
                    props.setpanelOpen(false)
                }} className='flex items-center gap-4  px-2 border-2 border-white active:border-black rounded-xl my-4 justify-start'> 
                <h2 className='bg-[#eee] h-12 w-14 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
                <h4 className='text-lg'> 
                    {elem}
                </h4>
            </div>
            })
        }

        
    </div>
  )
}

export default LocationSearchPanel