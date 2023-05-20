const TournamentController = require('./tournamentController');
const Tournament = require('./tournamentModel');

class TournamentRouter {

    constructor(app) {
        const API_ROUTE = `${process.env.API_BASE}tournaments`;
        app.route(API_ROUTE).get(TournamentController.activeTournaments);
        app.route(`${API_ROUTE}/tournament/:id/table`).get(TournamentController.getTable);
        app.route(`${API_ROUTE}/tournament/:id/fixture`).get(TournamentController.getFixture)
    }

}

module.exports = TournamentRouter;