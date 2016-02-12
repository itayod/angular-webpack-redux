import style from './arrow.less';

export default angular.module('images.arrow',[])

.directive('imagesArrow',function counter() {
  return {
    scope: {
      dir: '@'
    },
    template: `
        <div class="arrow" ng-class="{'arrow-left': dir == 'left', 'arrow-right': dir == 'right'}"></div>
      <!--<i ng-class="{'glyphicon-chevron-left': dir, 'glyphicon-chevron-right': !dir}"></i>-->
    `
  }
})
