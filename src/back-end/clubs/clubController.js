const ClubService = require('./clubService')
const ResponseHandler = require('../dto/ResponseHandler')

class ClubController {

    static async getActiveClubs(req, res) {
        try {
            const data = await ClubService.getActiveClubs();
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

    static async getClub(req, res) {
        try {
            const data = await ClubService.getClub(req.params.id);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

}

module.exports = {ClubController};