// Include controllers file
var LocationController = require('../../controllers/locations');
//initialize
module.exports = function (router) {
    
    router.get('/usuarios/:id_usuario/location', LocationController.getUserLocation );
    router.get('/usuarios/:id_usuario/location/:id', LocationController.getUserLocationById);
    router.post('/usuarios/:id_usuario/location', LocationController.addUserLocation );
    router.patch('/usuarios/:id_usuario/location/:id', LocationController.updateUserLocationById );
    router.delete('/usuarios/:id_usuario/location/:id', LocationController.deleteUserLocationById );

    /*router.post("/usuarios/:id_usuario/devices",UserController.addUserDevice);
    router.delete('/usuarios/:id_usuario/devices/:id',UserController.deleteUserDevice);
    router.patch('/usuarios/:id_usuario/devices/:id',UserController.updateUserDevice)
*/
}