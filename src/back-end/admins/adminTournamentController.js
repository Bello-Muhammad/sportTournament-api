const TournamentService = require('../tournaments/tournamentService');
const ResponseHandler = require('../dto/ResponseHandler');

class adminTournamentsController {

    static async allTournament(req, res) {
        try {
            const data = await TournamentService.getAllTournaments()
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

    static async addTournament(req, res) {
        try {
            const data = await TournamentService.addTournament(req.body);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async addFixture(req, res) {
        try {
            const data = await TournamentService.addFixture(req.params.id, req.body);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async fixture(req, res) {
        try {
            const data = await TournamentService.adminFixture(req.params.id);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async tourStatusUpdate(req, res) {
        try {
            const data = await TournamentService.satusUpdate(req.params.id, req.body);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

    static async getTournament(req, res) {
        try {
            const data = await TournamentService.getTournament(req.params.id)
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

}

module.exports = adminTournamentsController;