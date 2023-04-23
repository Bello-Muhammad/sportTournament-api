const ClubRouter = require('../clubs/clubRoute');
const PlayerRouter = require('../players/playerRoute');
const TournamentRouter = require('../tournaments/tournamentRoute');
const AdminRouter = require('../admins/adminRoute');

class AppRoutes {
    static init(app) {
        new ClubRouter(app);
        new PlayerRouter(app);
        new TournamentRouter(app);
        new AdminRouter(app);
    }


}

module.exports = AppRoutes;