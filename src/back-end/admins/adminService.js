const Admin = require('./adminModels');

class AdminService {

    static async adminSignUp(body) {

        // console.log(body)
        const admin = new Admin({
            ...body
        })

        return await admin.save();
    }

    static async adminLogin(body) {
        const {username, password} = body;
        username.toLowerCase();
        console.log(username)
        
        const admin = await Admin.findByCridentials(username, password)

        return admin
    }

}

module.exports = AdminService;