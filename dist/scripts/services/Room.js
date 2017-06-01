/**
 * Created by SolarUser on 5/24/2017.
 */
(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        var addRoom = function () {
            rooms.$add('rooms' + (rooms.length + 1))
        };

        return {
            all: rooms,
            addRoom
        };
    }

    angular
        .module('blocChat')
        .factory('Room',['$firebaseArray', Room]);
})();