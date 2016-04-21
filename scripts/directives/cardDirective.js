angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);
  //first line is always gettingt the angular module and then adding the extension
  //directive
   //The first argument is the name of the directive and how you'll use it in
   //your HTML. Angular converts camelCase to snake-case for us, so if you want to
   //use <secret-garden></secret-garden> in your HTML, name your directive
  //.directive('secretGarden', myFunctionIHaventMadeYet)
  function wdiCard(){
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl:  "templates/cardDirective.html",
      controller: WdiCardController,
      controllerAs: 'wdiCardCtrl'
    };
    return directive;
  }

  function WdiCardController(){
    var vm = this;
  }
