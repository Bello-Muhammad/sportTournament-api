const Tournament = require('./tournamentModel');
const Fixture = require('./fixturesModel');

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

        const data = {
            title: tournament.title,
            clubs: tournament.club
        }
        return data;
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
        const {Title, session} = req.body;

        const eventTitle = Title.split(" ");

        for (let i = 0; i < eventTitle.length; i++) {
            eventTitle[i] = eventTitle[i][0].toUpperCase() + eventTitle[i].substr(1);
        }

        const title = eventTitle.join(' ');

        const checkForTournament = await Tournament.findOne({session});

        if(checkForTournament) {
            throw new Error('Tournament aleady added!')
        }

        const tournament = new Tournament({
            title,
            session
        });

        await tournament.save();
        
        return tournament
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