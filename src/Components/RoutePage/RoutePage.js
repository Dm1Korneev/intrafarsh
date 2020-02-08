import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

import { GOOGLE_MAP_API_KEY } from 'Constants';

import { Container } from './RoutePage.styled';

const propTypes = {
  getRoutePoints: PropTypes.func.isRequired,
  routePoints: PropTypes.arrayOf(PropTypes.object),
  routeID: PropTypes.string.isRequired,
};

const defaultProps = {
  routePoints: [],
};

const RoutePage = (props) => {
  const { getRoutePoints, routeID, routePoints } = props;

  useEffect(() => {
    getRoutePoints({ routeID });
  }, [getRoutePoints, routeID]);

  if (!routePoints.length) {
    return null;
  }

  const renderMarkers = (map, maps) => {
    routePoints.map((point) => new maps.Marker({
      position: {
        lat: point.Latitude,
        lng: point.Longitude,
      },
      map,
      title: point.PointName,
    }));
  };

  const bounds = {
    ne: {
      lat: 0,
      lng: 0,
    },
    sw: {
      lat: Number.POSITIVE_INFINITY,
      lng: Number.POSITIVE_INFINITY,
    },
  };

  routePoints.forEach((point) => {
    bounds.ne.lat = Math.max(bounds.ne.lat, point.Latitude);
    bounds.ne.lng = Math.max(bounds.ne.lng, point.Longitude);
    bounds.sw.lat = Math.min(bounds.sw.lat, point.Latitude);
    bounds.sw.lng = Math.min(bounds.sw.lng, point.Longitude);
  });

  bounds.ne.lat += 0.001;
  bounds.ne.lng += 0.001;
  bounds.sw.lat -= 0.001;
  bounds.sw.lng -= 0.001;

  const size = {
    width: window.screen.width,
    height: window.screen.height,
  };

  const { center, zoom } = fitBounds(bounds, size);

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        streetViewControl={false}
        mapTypeControl={false}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </Container>
  );
};

RoutePage.propTypes = propTypes;
RoutePage.defaultProps = defaultProps;

export default RoutePage;
