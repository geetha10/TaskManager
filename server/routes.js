const userController = require('../server/controllers/user.controller');
const taskController = require('../server/controllers/task.controller');

module.exports = function(app){
    // app.get('/api', AuthorController.index);
    app.post('/user/signup', userController.signup);
    app.post('/user/login', userController.login);
    app.post('/user/isUserAuth', userController.verifyJWT ,userController.isUserAuth);
    app.post('/task/createTask', userController.verifyJWT, taskController.createTask);
    app.get('/task/viewTasks', userController.verifyJWT, taskController.viewTasks);
    //app.post('/task/addTeamateToTask', userController.verifyJWT, taskController.addTeamate);
}
