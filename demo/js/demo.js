var app = angular.module('demoApp', ['inLineEdit'])
.controller('inlineEditController', function($scope) {

	$scope.addHundred = function(){
		console.time('Adding objects');
		var toVal = $scope.items.length + 101;
		for (var i=$scope.items.length;i<toVal;i++){
			$scope.items.push({name: 'it' + i, value: 1234 * i});
		}
		console.timeEnd('Adding objects');
	}

	$scope.items=[{name: 'it1', value: 1234}, {name: 'it2', value: 2222}, {name: 'it3', value: 3333}]
	
})
.directive('numbersOnly', function() {
		return {
			require: 'ngModel',
			link: function(scope, element, attrs, modelCtrl) {
				element.addClass("numeric-input");
				modelCtrl.$parsers.push(function(inputValue) {
					// this next if is necessary for when using ng-required on your input. 
					// In such cases, when a letter is typed first, this parser will be called
					// again, and the 2nd time, the value will be undefined
					if (inputValue == undefined) return ''
					var transformedInput = inputValue.replace(/[^0-9]/g, '');
					if (transformedInput != inputValue) {
						modelCtrl.$setViewValue(transformedInput);
						modelCtrl.$render();
					}

					return Number(transformedInput);
				});
			}
		};
	});