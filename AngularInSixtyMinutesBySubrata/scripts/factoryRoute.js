/**
 * Created by subratas on 7/5/2015.
 */
var app = angular.module('routeModule',['ngRoute']);

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
    return factory;
});

app.controller('routeController',function($scope,studentFactory){
  $scope.students = studentFactory.getStudent();
});

app.factory('addStudentFactory' , function(){
    var factory = {};
    factory.addStudent = function($scope){
        $scope.students.push({
            fName:$scope.nfn,
            lName:$scope.nln
        });
    }
    return factory;
});

app.controller('addStudentController',function($scope,addStudentFactory){
    addStudentFactory.addStudent($scope);
});

app.config(function($routeProvider){
    $routeProvider.when('/AddStudent' , {controller:'addStudentController' , templateUrl:'AddStudent.html'})
        .when('/ListStudent' , {controller:'routeController' , templateUrl:'ListStudent.html'})
        .otherwise({redirectTo : '/AddStudent'})
});

