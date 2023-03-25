const Tournament = require('./tournamentModel');
const Fixture = require('./fixturesModel');
const firstLetterCap = require('../utils/helpers');

class TournamentService {

    static async getTournaments() {
        
        const tournaments = await Tournament.find();

        if(tournaments.length === 0) {
            throw new Error('No tournament yet!');
        }

        return tournaments;
    }

    static async getTournament(tournamentId) {

        const tournament = await Tournament.findOne({_id: tournamentId})
        .populate({path: 'club', select: 'clubName'});

        if(!tournament) {
            throw new Error('Tournament not found');
        }

        return {
            title: tournament.title,
            session: tournament.session,
            clubs: tournament.club
        }
        
    }

    static async getFixture(tournamentId) {

        const tourFix = await Tournament.findOne({_id: tournamentId})
        .populate({path: 'fixture', select: 'firstTeam secondTeam date time -_id'});

        if(!tourFix) {
            throw new Error('Tournament do not exist')
        }

        const data = {
            title: tourFix.title,
            fixtures: tourFix.fixture
        }

        return data;
    }

    static async postTournament(body) {
        const {Title, session, startDate, endDate} = body;

        const title = firstLetterCap(Title);

        const checkForTournament = await Tournament.findOne({session});

        if(checkForTournament) {
            throw new Error('Tournament already added!')
        }

        const tournament = new Tournament({
            title,
            session,
            startDate,
            endDate
        });

        return await tournament.save();
    }

    static async postFixture(tournamentId, body) {

        const {firstTeam, secondTeam, date, time} = body;

        checkForFixture = await Fixture.findOne({firstTeam, secondTeam});

        if(checkForFixture) {
            throw new Error('These fixture is fixed already.');
        }

        const fixture = new Fixture({
            firstTeam,
            secondTeam,
            date,
            time,
            tourFix: tournamentId
        })

        await fixture.save();
        return fixture;
    }
}

module.exports = TournamentService;