const ClubService = require('../clubs/clubService');
const ResponseHandler = require('../dto/ResponseHandler');

class adminClubController {

    static async addClub(req, res) {
        try {
            const data = await ClubService.addClub(req.params.id, req.body);
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

    static async getClubs(req, res) {
        try {
            const data = await ClubService.getClubs(req.params.tourId);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

    static async patchClub(req, res) {
        try {
            const data = await ClubService.patchClub(req.params.id, req.body);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, er.message);
        }
    }

}

module.exports = adminClubController;