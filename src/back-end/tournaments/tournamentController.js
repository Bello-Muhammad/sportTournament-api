const TournamentService =  require('./tournamentService');
const ResponseHandler = require('../dto/ResponseHandler');

class TournamentController {

    static async getActiveTournaments(req, res) {
        try {
            const data = await TournamentService.getTournaments()
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async getTournament(req, res) {
        try {
            const data = await TournamentService.getTournament(req.params.id);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async getFixture(req, res) {
        try {
            const data = await TournamentService.getFixture(req.params.id);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async getTable(req, res) {
        try {
            const data = await TournamentService.getTable(req.params.id);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

}

module.exports = TournamentController;