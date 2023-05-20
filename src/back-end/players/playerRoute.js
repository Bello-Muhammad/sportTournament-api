const PlayerController = require('./playerController');

class PlayerRouter {

    constructor(app) {

        const API_ROUTE = `${process.env.API_BASE}`
        app.route(`${API_ROUTE}clubs/club/:id/players`).get(PlayerController.getActivePlayers);
        app.route(`${API_ROUTE}player`).get(PlayerController.getPlayer);
    }

}

module.exports = PlayerRouter;