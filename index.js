import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initState.json';

import app from './public/components/app/app';
import { default as DevTools, runDevTools} from './utils/devTools';

angular.module('ngReduxPack', [ngRedux,app.name])
  .config(($ngReduxProvider) => {
    //Creates the Redux store, and allow connect() to access it.
    $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()],initialState);
  })
  //run the dev tool (disable by setting __DEV__ to false)
  .run(runDevTools);

//kick start angular on document ready
angular.element(document).ready(function(){
  angular.bootstrap(document,['ngReduxPack'])
})
