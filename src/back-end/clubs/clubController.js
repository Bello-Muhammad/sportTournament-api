const ClubService = require('./clubService')
const ResponseHandler = require('../dto/ResponseHandler')

class ClubController {

    static async getClubs(req, res) {
        try {
            const data = await ClubService.getClubs();
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
            // console.log(err.message)
            ResponseHandler.error(res, err.message);
        }
    }

    static async postClub(req, res) {

        const club = req.body.club
        try {
            const data = await ClubService.postClub(club);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }

    }

    static async patchClub(req, res) {
        try {
            const data = await ClubService.patchClub(req.params.id, req.body)
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async removeClub(req, res) {
        try {
            const data = await ClubService.removeClub(request.params.id);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

}

module.exports = {ClubController};