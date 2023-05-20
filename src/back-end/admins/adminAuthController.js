const AdminAuthService = require('./adminAuthService');
const ResponseHandler = require('../dto/ResponseHandler');

class AdminController {

    static async adminSignUp(req, res) {
        try {
            const data = await AdminAuthService.adminSignUp(req.body)
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message);            
        }
    }

    static async adminLogin(req, res) {
        try {
            const data = await AdminAuthService.adminLogin(req.body)
            req.session.admin = data;
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message);            
        }
    }

}

module.exports = AdminController;