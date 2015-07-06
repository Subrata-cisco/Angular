/**
 * Created by subratas on 7/5/2015.
 */

    var app = angular.module('routeModule',['ngRoute']);
    app.controller('routeController',RouteController);
    app.controller('addStudentController',AddStudentController);

    function RouteController($scope){
        $scope.students = [
            {fName:'Subrata' , lName:'Saha'           },
            {fName:'Mamita' ,  lName:'Bhattacharjee'  },
            {fName:'Subra' ,   lName:'Bhat' ,         }
        ];
    }

    function AddStudentController($scope){
        $scope.addStudent = function(){
            $scope.students.push({
                fName:$scope.nfn,
                lName:$scope.nln
            });
        };
    }

    app.config(function($routeProvider){
        $routeProvider.when('/AddStudent' , {controller:'addStudentController' , templateUrl:'AddStudent.html'})
            .when('/ListStudent' , {controller:'routeController' , templateUrl:'ListStudent.html'})
            .otherwise({redirectTo : '/AddStudent'})
    });


    app.factory('studentFactory' , function (){
        var students = [
            {fName:'Subrata' , lName:'Saha'           },
            {fName:'Mamita' ,  lName:'Bhattacharjee'  },
            {fName:'Subra' ,   lName:'Bhat' ,         }
        ];


        var factory = {};

        factory.getStudent = function(){
            return students;
        }

        factory.postStudent = function(Student){

        };

        return factory;
    });


