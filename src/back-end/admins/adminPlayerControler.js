const PlayerService = require('../players/playerService');
const ResponseHandler = require('../dto/ResponseHandler')

class adminPlayersController {

    static async getPlayers(req, res) {
        try {
            const data = await PlayerService.getPlayers(req.params.clubId);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

    static async addPlayer(req, res) {
        try {
            const data = await PlayerService.addPlayer(req,params.clubId, req.body);
            ResponseHandler.success(res, data);

        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async updatePlayer(req, res) {
        try {
            const data = await PlayerService.updatePlayer(req.params.id, req.body);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }
}

module.exports = adminPlayersController;