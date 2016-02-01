angular.module('ToDoApp', [])
		.controller("mainCtrl", function($scope, dataService){

			$scope.helloWorld = function () {
				alert('hello world this is an angular app!!');
			};

			$scope.addTodos = function () {
				var newToDo = { name: "this is a new task!"};
				$scope.todos.push(newToDo);
			};

			$scope.hello = dataService.hello;

			dataService.getToDos(function(response){

			console.log(response.data);
			$scope.todos =  response.data;
				
			});
		})
		.service('dataService', function($http){

			this.hello = function(){
				console.log("hello i'm a service made with angular by varun");
			};

			this.getToDos = function(callback){
				$http.get('mock/tasks.json').then(callback);
			};
		});