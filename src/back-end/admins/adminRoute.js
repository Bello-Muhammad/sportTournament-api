const AdminAuthController = require('./adminAuthController');
const AdminTournamentsController = require('./adminTournamentController');
const AdminClubController = require('./adminClubController');
const AdminPlayersController = require('./adminPlayerControler');
const isAuth = require('../utils/auth')

class AdminRouter {

    constructor(app) {

        const API_ROUTE = `${process.env.API_Base}admin/`;
        //admin auth route
        app.route(`${API_ROUTE}register`).post(AdminAuthController.adminSignUp);
        app.route(`${API_ROUTE}auth`).post(AdminAuthController.adminLogin);
        
        //admin tournament route
        app.route(`${API_ROUTE}tournaments`).get(AdminTournamentsController.allTournament);
        app.route(`${API_ROUTE}tournaments/addtournament`).post(isAuth, AdminTournamentsController.addTournament);
        app.route(`${API_ROUTE}tournaments/tournament/:id`).get(isAuth, AdminTournamentsController.getTournament);
        app.route(`${API_ROUTE}tournaments/:id/fixture`).get(isAuth, AdminTournamentsController.fixture).post(isAuth,AdminTournamentsController.addFixture);
        app.route(`${API_ROUTE}tournaments/tournament/:id/update-status`).post(isAuth, AdminTournamentsController.tourStatusUpdate);
        
        //admin club route
        app.route(`${API_ROUTE}tournaments/tournament/:tourId`).get(isAuth, AdminClubController.getClubs).post(isAuth, AdminClubController.addClub)
        app.route(`${API_ROUTE}tournaments/tournament/:tourId/clubs/club/:id`).patch(isAuth, AdminClubController.patchClub);
        
        //admin player route
        app.route(`${API_ROUTE}tournaments/tournament/:tourId/clubs/club/:clubId/players`).get(isAuth, AdminPlayersController.getPlayers);
        app.route(`${API_ROUTE}tournaments/tournament/:tourId/clubs/club/:clubId/players`).post(isAuth, AdminPlayersController.addPlayer)
        app.route(`${API_ROUTE}tournaments/tournament/clubs/club/players/player/:id`).patch(isAuth, AdminPlayersController.updatePlayer)
    }

}

module.exports = AdminRouter;