/**
 * Created by SolarUser on 5/24/2017.
 */
(function() {

    function LandingCtrl(Message, Room, $uibModal) {
        this.rooms = Room.all;
        this.messages = null;
        this.addRoomRequest = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        }
        this.displayMessages = ((room) => {
            this.messages = Message.getByRoomId(room.$id);
        })
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Message', 'Room', '$uibModal', LandingCtrl]);
})();