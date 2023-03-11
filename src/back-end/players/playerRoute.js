const PlayerController = require('./playerController');

class PlayerRouter {

    constructor(app) {

        const API_ROUTE = `${process.env.API_BASE}`
        app.route(`${API_ROUTE}clubs/club/:id/players`).get(PlayerController.getPlayers);
        app.route(`${API_ROUTE}clubs/club/:id/player`).post(PlayerController.postPlayer);
        app.route(`${API_ROUTE}player`).get(PlayerController.getPlayer);
        app.route(`${API_ROUTE}clubs/club/players/player/:id`).patch(PlayerController.patchPlayer).delete(PlayerController.removePlayer)
    }

}

module.exports = PlayerRouter;