const TournamentService =  require('./tournamentService');
const ResponseHandler = require('../dto/ResponseHandler');

class TournamentController {

    static async getTournaments(req, res) {
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

    static async postTournament(req, res) {
        try {
            const data = await TournamentService.postTournament(req.body);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async postFixture(req, res) {
        try {
            const data = await TournamentService.postFixture(req.params.id, req.body)
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

}

module.exports = TournamentController