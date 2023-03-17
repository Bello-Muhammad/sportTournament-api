const TournamentController = require('./tournamentController')

class TournamentRouter {

    constructor(app) {
        const API_ROUTE = `${process.env.API_BASE}tournaments`;
        app.route(API_ROUTE).get(TournamentController.getTournaments).post(TournamentController.postTournament);
        app.route(`${API_ROUTE}/tournament/:id`).get(TournamentController.getTournament);
        app.route(`${API_ROUTE}/tournament/:id/fixture`).get(TournamentController.getFixture).post(TournamentController.postFixture);
    }

}

module.exports = TournamentRouter;