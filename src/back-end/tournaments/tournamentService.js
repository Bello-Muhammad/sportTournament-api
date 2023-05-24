const Tournament = require('./tournamentModel');
const Fixture = require('./fixturesModel');
const firstLetterCap = require('../utils/helpers');

class TournamentService {

    static async addTournament(body) {
        const {Title, session, startDate, endDate} = body;

        const title = firstLetterCap(Title);

        const checkForTournament = await Tournament.findOne({Title});

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

    static async getAllTournaments() {
        
        const tournaments = await Tournament.find();

        if(tournaments.length === 0) {
            throw new Error('No tournament yet!');
        }

        return tournaments;
    }

    static async activeTournaments() {
        
        const tournaments = await Tournament.find({status: {$regex:'active', $options: 'i'}});

        if(!tournaments) {
            throw new Error('No active tournament yet!');
        }

        return tournaments;
    }

    static async getTournament(tournamentId) {

        const tournament = await Tournament.findOne({_id: tournamentId})
        .populate({path: 'club', select: 'clubName'});

        if(!tournament) {
            throw new Error('Tournament not found');
        }

        return tournament.club;
        
    }

    static async satusUpdate(tournamentId, body) {

        const update = await Tournament.findOneAndUpdate({_id: tournamentId}, body, {new: true});

        if(!update) {
            throw new Error('tournament doesn'/'t exist')
        }
        return update;
    }

    static async adminFixture(tournamentId) {

        const tourFix = await Tournament.findOne({_id: tournamentId})
        .populate({path: 'fixture', select: 'firstTeam secondTeam date time -_id'});

        if(!tourFix) {
            throw new Error('Tournament do not exist')
        }

        return tourFix.fixture;
    }

    static async getFixture(tournamentId) {

        const tourFix = await Tournament.findOne({_id: tournamentId})
        .populate({path: 'fixture', select: 'firstTeam secondTeam date time -_id'});

        let Status = tourFix.status

        if(Status === "offline") {
            throw new Error('Tournament is not active')
        }else if(!tourFix) {
            throw new Error('Tournament do not exist')
        }

        return tourFix.fixture;
    }

    static async addFixture(tournamentId, body) {


        const {firstTeam, secondTeam, date, time } = body;

        const checkForFixture = await Fixture.findOne({firstTeam, secondTeam})

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

        return await fixture.save();

    }

    static async getTable(tournamentId) {

        const tournament = await Tournament.findOne({_id: tournamentId})
        .populate({path: 'club', select: 'played win lose gf ga gd points _id'})

        return tournament.club.sort((a,b) => (a.gf < b.gf) ? 1 : -1);
    }
}

module.exports = TournamentService;