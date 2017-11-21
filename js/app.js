console.log('running app');

var app = angular.module('states_iq', ['ui.filters']);
app.controller('data_stuff', do_data);

function do_data($scope) {
    console.log('doing data stuff');
    $scope.students = data;

    $scope.addStudent = function () {
        console.log('adding student');

        var new_student = {
            id: $scope.student_id,
            name: $scope.student_name,
            gender: $scope.student_gender,
            score: $scope.student_score,
            state: $scope.student_state.state
        }
        console.log(new_student)
        $scope.students.push(new_student)
    }
    console.log(data);
}