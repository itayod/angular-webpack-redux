import './app.less';

import images from '../images/images';

export default angular.module('app', [images.name])

  // register the app directive
  .directive('app', () => {
    return {template: require('./app.html')}
  });
