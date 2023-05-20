const AdminAuthController = require('./adminAuthController');
const AdminTournamentsController = require('./adminTournamentController');
const AdminClubController = require('./adminClubController');
const AdminPlayersController = require('./adminPlayerControler');

class AdminRouter {

    constructor(app) {

        const API_ROUTE = `${process.env.API_Base}admin/`;
        //admin auth route
        app.route(`${API_ROUTE}register`).post(AdminAuthController.adminSignUp);
        app.route(`${API_ROUTE}auth`).post(AdminAuthController.adminLogin);
        
        //admin tournament route
        app.route(`${API_ROUTE}tournaments`).get(AdminTournamentsController.allTournament);
        app.route(`${API_ROUTE}tournaments/addtournament`).post(AdminTournamentsController.addTournament);
        app.route(`${API_ROUTE}tournaments/tournament/:id`).get(AdminTournamentsController.getTournament);
        app.route(`${API_ROUTE}tournaments/:id/fixture`).get(AdminTournamentsController.fixture).post(AdminTournamentsController.addFixture);
        app.route(`${API_ROUTE}tournaments/tournament/:id/update-status`).post(AdminTournamentsController.tourStatusUpdate);
        
        //admin club route
        app.route(`${API_ROUTE}tournaments/tournament/:tourId`).get(AdminClubController.getClubs).post(AdminClubController.addClub)
        app.route(`${API_ROUTE}tournaments/tournament/:tourId/clubs/club/:id`).patch(AdminClubController.patchClub);
        
        //admin player route
        app.route(`${API_ROUTE}tournaments/tournament/:tourId/clubs/club/:clubId/players`).get(AdminPlayersController.getPlayers);
        app.route(`${API_ROUTE}tournaments/tournament/:tourId/clubs/club/:clubId/players`).post(AdminPlayersController.addPlayer)
        app.route(`${API_ROUTE}tournaments/tournament/clubs/club/players/player/:id`).patch(AdminPlayersController.updatePlayer)
    }

}

module.exports = AdminRouter;