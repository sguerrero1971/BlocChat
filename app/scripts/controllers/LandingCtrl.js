/**
 * Created by SolarUser on 5/24/2017.
 */
(function() {

    function LandingCtrl(Room) {
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();