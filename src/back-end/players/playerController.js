const PlayerService = require('./playerService')
const ResponseHandler = require('../dto/ResponseHandler')

class PlayerController {

    static async getPlayers(req, res) {
        // console.log(req.params)
        try {
            const data = await PlayerService.getPlayers(req.params.id);
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

    static async postPlayer(req, res) {
        try {

            const data = await PlayerService.postPlayer(req.params.id, req.body);
            ResponseHandler.success(res, data)
        } catch (err) {
            ResponseHandler.error(res, err.message);
        }
    }

    static async removePlayer(req, res) {
        try {
            const data = await PlayerService.removePlayer(req.params.id)
            ResponseHandler.success(res, data);
        } catch (err) {
            ResponseHandler.error(res, err.message)
        }
    }

    static async patchPlayer(req, res) {
        try {
            const data = await PlayerService.patchPlayer(req.params.id, req.body);
            ResponseHandler.success(res, data)
            
        } catch (err) {
            ResponseHandler.error(res, err.mesaage)
        }
    }

}

module.exports = PlayerController;