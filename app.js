angular.module('KanbanApp', [])
	.controller('kanbanController', function ($scope) {
		var kanbanCtrl = this;
		kanbanCtrl.demo = "one"
		kanbanCtrl.tasks = [] //Tiene alcance local

		kanbanCtrl.show = function(){
			console.log($scope.demoview);
		}

		var index = 0;

		kanbanCtrl.addTask = function(){
			var tasktmp = {
				index: index,
				name: $scope.newObj.name,
				desc: $scope.newObj.desc,
				status: 1
			}
			kanbanCtrl.tasks.push(tasktmp);
			index += 1;
			$scope.newObj = {};
			//console.log($scope.newObj);
			//$scope.newObj = {};
		}

		kanbanCtrl.nextStatus = function(id){
			console.log(id);
			for (var i=0; i<kanbanCtrl.tasks.length; i++){
				if (kanbanCtrl.tasks[i].index == id) {
					kanbanCtrl.tasks[i].status += 1;
				}
			}
		}


	});