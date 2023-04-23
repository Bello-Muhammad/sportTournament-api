const AdminController = require('./adminController')

class AdminRouter {

    constructor(app) {

        const API_ROUTE = `${process.env.API_Base}admin/`
        app.route(`${API_ROUTE}register`).post(AdminController.adminSignUp)
        app.route(`${API_ROUTE}auth`).post(AdminController.adminLogin)
        
    }

}

module.exports = AdminRouter;