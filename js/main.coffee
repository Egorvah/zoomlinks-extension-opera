
m = angular.module("zoomlinks", ['ngResource','ui'])

m.factory 'Link', ($resource)->
  $resource 'http://zoomlinks.ru/rest/link/:id'

m.controller 'MainCtr', ($scope, Link)->
  $scope.exportBookmarks = ->
    alert 'Hi Opera'


  $scope.exportTabs = ->
