import { MapPinHouseIcon } from "lucide-react";
import { Map, Marker } from "pigeon-maps";
import React from "react";

const PlaceMap: React.FC<{ longitude: string; latitude: string }> = ({
  latitude,
  longitude,
}) => {
  console.log(latitude + longitude);

  return (
    <div className="border-y-2 py-5 w-full ">
      <h6 className="text-accentColor font-medium text-2xl">موقعیت ویلا </h6>
      <div className="rounded-md mt-5 overflow-hidden">
        <Map height={300}
          defaultCenter={[35.925112, 50.829098]}
          zoom={15}
          maxZoom={15}
        >
         <Marker 
          width={100}
          height={100}
          anchor={[35.925112, 50.829098]}
          
         >  
            <MapPinHouseIcon size={72} className="bg-errorColor w-full h-full  p-2 rounded-full text-white" />
         </Marker>
        </Map>
      </div>
    </div>
  );
};

export default PlaceMap;
