import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../css/map.css'
import { FaMapMarkerAlt } from "react-icons/fa";


const LocationPin = ({text}) => (
    <div className="pin">
        <FaMapMarkerAlt className='pin-icon'/>
        <p className='pin-text'>{text}</p>
    </div>
)

const Map =({location, zoomLevel}) => (
    <div className='map'>
        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyDkeI7s7L0U1M_sJ3085VX2dL5DIXOcBdE'}}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)
export default Map;