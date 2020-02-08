import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

import { GOOGLE_MAP_API_KEY } from 'Constants';

import BackButton from './BackButton';

import { Container } from './RoutePage.styled';
import mapStyles from './mapStyles';

const propTypes = {
  getRoutePoints: PropTypes.func.isRequired,
  routePoints: PropTypes.arrayOf(PropTypes.object),
  routeID: PropTypes.string.isRequired,
  /* eslint-disable-next-line react/forbid-prop-types */
  history: PropTypes.any.isRequired,
};

const defaultProps = {
  routePoints: [],
};

const RoutePage = (props) => {
  const {
    getRoutePoints, routeID, routePoints, history,
  } = props;

  const renderMarkers = (map, maps) => {
    routePoints.map((point) => {
      const marker = new maps.Marker({
        position: {
          lat: point.Latitude,
          lng: point.Longitude,
        },
        map,
        title: point.PointName,
        animation: maps.Animation.DROP,
      });
      marker.addListener('click', () => history.push(`/place/${point.PointID}`));
      return marker;
    });
  };

  useEffect(() => {
    getRoutePoints({ routeID });
  }, [getRoutePoints, routeID]);

  if (!routePoints.length) {
    return null;
  }

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

  const mapOptions = {
    styles: mapStyles, // straight out of something like snazzymaps
  };

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        scaleControl={false}
        zoomControl={false}
        fullscreenControl={false}
        streetViewControl={false}
        mapTypeControl={false}
        options={mapOptions}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
      <BackButton />
    </Container>
  );
};

RoutePage.propTypes = propTypes;
RoutePage.defaultProps = defaultProps;

export default withRouter(RoutePage);
