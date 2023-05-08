const AdminController = require('./adminController');
const AdminTournamentsController = require('./adminTournamentController');
const AdminClubController = require('./adminClubController');
const AdminPlayersController = require('./adminPlayerControler');

class AdminRouter {

    constructor(app) {

        const API_ROUTE = `${process.env.API_Base}admin/`;
        //admin auth route
        app.route(`${API_ROUTE}register`).post(AdminController.adminSignUp);
        app.route(`${API_ROUTE}auth`).post(AdminController.adminLogin);
        //admin tournament route
        app.route(`${API_ROUTE}tournaments`).get(AdminTournamentsController.allTournament);
        app.route(`${API_ROUTE}tournaments/addtournament`).post(AdminTournamentsController.addTournament);
        // app.route(`${API_ROUTE}tournaments/tournament/:id`).get(AdminTournamentsController.getTournament);
        app.route(`${API_ROUTE}tournaments/:id/fixture`).post(AdminTournamentsController.addFixture);
        app.route(`${API_ROUTE}tournaments/:id/update-status`).post(AdminTournamentsController.updateTournamentStatus);
        //admin club route
        app.route(`${API_ROUTE}tournaments/tournament/:id`).get(AdminClubController.getClubs).post(AdminClubController.addClub)
        app.route(`${API_ROUTE}tournaments/tournament/:id/clubs/club/:id`).patch(AdminClubController.patchClub)
        
    }

}

module.exports = AdminRouter;