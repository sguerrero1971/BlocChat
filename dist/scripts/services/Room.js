/**
 * Created by SolarUser on 5/24/2017.
 */
(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room',['$firebaseArray', Room]);
})();