const ClubRouter = require('../clubs/clubRoute');
const PlayerRouter = require('../players/playerRoute');
const TournamentRouter = require('../tournaments/tournamentRoute')

class AppRoutes {
    static init(app) {
        new ClubRouter(app);
        new PlayerRouter(app);
        new TournamentRouter(app);
    }


}

module.exports = AppRoutes;