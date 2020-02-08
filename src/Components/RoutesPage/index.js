import commonHoc from 'Components/commonHoc';
import { getRoutes } from 'Redux/actions';
import { routesSelector } from 'Selectors/routes';

import RoutesPage from './RoutesPage';

const mapStateToProps = (state) => ({
  routes: routesSelector(state),
});

const mapDispatchToProps = {
  getRoutes,
};

export default commonHoc(RoutesPage, {
  mapDispatchToProps, mapStateToProps,
});
