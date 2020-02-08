import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { GOOGLE_MAP_API_KEY } from 'Constants';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const RoutePage = (props) => (
  <Map
    zoom={16}
    containerStyle={containerStyle}
    initialCenter={{
      lat: 55.7087173,
      lng: 37.7277525,
    }}
    streetViewControl={false}
    mapTypeControl={false}
    {...props}
  >
    <Marker
      name="Congress centre Technopolis Moscow"
      position={{
        lat: 55.7083437,
        lng: 37.7245968,
      }}
    />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(RoutePage);
