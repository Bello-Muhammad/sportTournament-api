const AdminService = require('./adminService');
const ResponseHandler = require('../dto/ResponseHandler');

class AdminController {

    static async adminSignUp(req, res) {
        try {
            const data = await AdminService.adminSignUp(req.body)
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message);            
        }
    }

    static async adminLogin(req, res) {
        try {
            const data = await AdminService.adminLogin(req.body)
            // req.session.admin = data;
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message);            
        }
    }

}

module.exports = AdminController;