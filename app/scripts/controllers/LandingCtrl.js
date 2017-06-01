/**
 * Created by SolarUser on 5/24/2017.
 */
(function() {

    function LandingCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.addRoomRequest = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]);
})();