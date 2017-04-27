 angular.module('app')
    .controller('CreateStudentController', function($scope, StudentService) {
        $scope.newStudent = {

            firstname: '',
            lastname: '',
            sexe: '',
            birthdate: '',
            city: '',
            zipCode: '',
            adress: '',
            github: '',
            email: ''
        };

        $scope.addStudent = function() {
            StudentService.create($scope.newStudent).then(function(res) {
                console.log('coucou');
            }, function(err) {

            });
        };
    });
