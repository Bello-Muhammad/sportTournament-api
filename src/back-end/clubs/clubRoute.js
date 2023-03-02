const {ClubController} = require('./clubController')

class ClubRouter {

    constructor(app) {
        // console.log('reach club router side')
        const API_ROUTE = `${process.env.API_BASE}clubs`
        app.route(API_ROUTE).get(ClubController.getClubs).post(ClubController.postClub);
        app.route(`${API_ROUTE}/club/:id`).get(ClubController.getClub);
        app.route(`${API_ROUTE}/club/update-club-aggregate/:id`).patch(ClubController.patchClub);
        app.route(`${API_ROUTE}/club/delete-club/:id`).delete(ClubController.removeClub)
    }

}

module.exports = ClubRouter;