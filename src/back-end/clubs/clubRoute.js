const {ClubController} = require('./clubController')

class ClubRouter {

    constructor(app) {
        
        const API_ROUTE = `${process.env.API_BASE}clubs`
        app.route(API_ROUTE).get(ClubController.getActiveClubs);
        app.route(`${API_ROUTE}/club/:id`).get(ClubController.getClub);
    }

}

module.exports = ClubRouter;