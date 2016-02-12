import * as ImagesActions from '../../../actions/images';
import style from './images.less';
import arrow from './children/arrow/arrow';


export default angular.module('images',[arrow.name])
.directive('images',function counter() {
  return {
    restrict: 'E',
    controller: ImagesController,
    controllerAs: 'vm',
    template: `
      <div id='images'>
        <div id="images-container">
          <h3 id="images-title"> {{vm.image.title}} </h3>
          <images-arrow class="images-left-arrow images-arrow" dir="left" ng-click="vm.switchImage(vm.image.id-1)"></images-arrow>
          <images-arrow class="images-right-arrow images-arrow" dir="right" ng-click="vm.switchImage(vm.image.id+1)"></images-arrow>
          <image ng-src="{{vm.image.src}}"/>
        </div>
      </div>
    `,
    scope: {}
  };
})


class ImagesController {


  constructor($ngRedux, $scope) {
    this.action = {};
    const unsubscribe = $ngRedux.connect(this.mapStateToThis,ImagesActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis = (state) => {
    return {
      image: state.images.selectedImage
    };
  };
}