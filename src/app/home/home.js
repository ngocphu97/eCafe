class HomeController {
  /** @ngInject */
  constructor() {
    this.title = 'Home page';
  }
}

angular.module('app').component('home', {
  templateUrl: 'app/home/home.html',
  controller: HomeController
});
