const PlayerService = require('./playerService')
const ResponseHandler = require('../dto/ResponseHandler')

class PlayerController {

    static async getActivePlayers(req, res) {
        try {
            const data = await PlayerService.getActivePlayers(req.params.id);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async getPlayer(req, res) {
        try {
            const data = await PlayerService.getPlayer(req.body);
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

}

module.exports = PlayerController;