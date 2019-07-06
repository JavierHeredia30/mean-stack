// Include controllers file
var UserController = require('../../controllers/users');
//initialize
module.exports = function (router) {
    
    router.get('/usuarios', UserController.getUsers );
    router.get('/usuarios/:id', UserController.getUserById );
    router.post('/usuarios', UserController.addUser );
    router.patch('/usuarios/:id', UserController.updateUserById );
    router.delete('/usuarios/:id', UserController.deleteUserById );

    router.post("/usuarios/:id_usuario/devices",UserController.addUserDevice);
}

//app.use('/', routes);