const {ClubController} = require('./clubController')

class ClubRouter {

    constructor(app) {
        
        const API_ROUTE = `${process.env.API_BASE}tournaments/tournament/:tourId/clubs`;
        app.route(API_ROUTE).get(ClubController.getActiveClubs);
        app.route(`${API_ROUTE}/club/:Id`).get(ClubController.getClub);
    }

}

module.exports = ClubRouter;