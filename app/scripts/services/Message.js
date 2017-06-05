/**
 * Created by SolarUser on 6/5/2017.
 */
(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);


           return {
               getByRoomId: function (roomId) {
                   return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

               }
           }
    }

    angular
        .module('blocChat')
        .factory('Message',['$firebaseArray', Message]);
})();