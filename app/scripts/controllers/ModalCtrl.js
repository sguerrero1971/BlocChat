/**
 * Created by SolarUser on 5/30/2017.
 */
(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.addRoom = Room.addRoom;
        this.confirm = () => {
            //this.addRoom();
            $uibModalInstance.close();
        }
        this.cancel = $uibModalInstance.close;
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();