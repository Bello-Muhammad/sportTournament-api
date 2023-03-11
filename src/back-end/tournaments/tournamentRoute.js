const TournamentController = require('./tournamentController')

class TournamentRouter {

    constructor(app) {
        const API_ROUTE = `${process.env.API_BASE}`;
        app.route(`${API_ROUTE}tournaments`).get(TournamentController.getTournaments).post(TournamentController.postTournament)
        app.route(`${API_ROUTE}tournaments/tournament`).get(TournamentController.getTournament);
        app.route(`${API_ROUTE}tournaments/tournament/fixture`).get(TournamentController.getFixture).post(TournamentController.postFixture);
    }

}

module.exports = TournamentRouter;