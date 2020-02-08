import commonHoc from 'Components/commonHoc';
import { getRoutePoints } from 'Redux/actions';
import { routePointsByIdSelector } from 'Selectors/routePoints';

import RoutePage from './RoutePage';

const mapStateToProps = (state, props) => {
  const { routeID } = props.match.params;

  return {
    routePoints: routePointsByIdSelector(state, routeID),
    routeID,
  };
};

const mapDispatchToProps = {
  getRoutePoints,
};

export default commonHoc(RoutePage, {
  mapDispatchToProps, mapStateToProps,
});
