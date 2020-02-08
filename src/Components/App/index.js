import commonHoc from 'Components/commonHoc';
import { appStart } from 'Redux/actions';

import App from './App';

const mapDispatchToProps = {
  appStart,
};

export default commonHoc(App, {
  mapDispatchToProps,
});
