import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useHotels } from "../../Context/HotelsProvider";


const Map = () => {
    const {isLoading , hotels} = useHotels();
    const [mapCenter, setMapCenter] = useState([51, 3]);
    return ( <div className="relative flex-1 bg-gray-100">
       <MapContainer className="h-full" center={mapCenter} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
   {hotels.map((item) => (
     <Marker key={item.id} position={[item.latitude , item.longitude]}>
     <Popup>
       {item.smart_location}
     </Popup>
   </Marker>
   ))}
  </MapContainer>
    </div> );
}
 
export default Map;