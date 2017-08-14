class LoginController {
  /** @ngInject */
  constructor() {
    this.title = 'Login page';
  }
}

angular.module('app').component('login', {
  templateUrl: 'app/login/login.html',
  controller: LoginController
});

