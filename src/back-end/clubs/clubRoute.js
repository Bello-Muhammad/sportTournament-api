const {ClubController} = require('./clubController')

class ClubRouter {

    constructor(app) {
        // console.log('reach club router side')
        const API_ROUTE = `${process.env.API_BASE}clubs`
        app.route(API_ROUTE).get(ClubController.getClubs)
        app.route(`${API_ROUTE}/:id`).post(ClubController.postClub);
        app.route(`${API_ROUTE}/club/:id`).get(ClubController.getClub);
        app.route(`${API_ROUTE}/club/updatedata/:id`).patch(ClubController.patchClub);
        app.route(`${API_ROUTE}/club/removeclub/:id`).delete(ClubController.removeClub)
    }

}

module.exports = ClubRouter;