const Club = require('./clubModel');
const clubPlayers = require('../players/playerModel');
const firstLetterCap = require('../utils/helpers');

class ClubService {

    static async getClubs() {
        const clubs = await Club.find()

        if(clubs.length === 0) {
            throw new Error('No club added yet');
        }

        return clubs;
    }

    static async getActiveClubs() {
        const activeClubs = await Club.find({status: 'active'});

        if(!activeClubs) {
            throw new Error('No active clubs yet');
        }

        return activeClubs;
    }

    static async getClub(clubId) {

        const club = await Club.findOne({_id: clubId})
        .populate({path: 'players', select: 'firstName lastName otherName'}).exec()

            if(!club) {
                throw new Error('club not found!');
            }

            return club;
              
    }

    static async addClub(tournamentId, club) {

        const clubName = firstLetterCap(club);

        const checkForClub = await Club.findOne({ clubName });

        if(checkForClub) {
            throw new Error('club exist: '+checkForClub.clubName);
        }

        const addClub = new Club({ 
            clubName,
            tournament: tournamentId
         });

        return await addClub.save();
    }

    static async patchClub(clubId, body) {

        const club = await Club.findOneAndUpdate({_id: clubId}, body, {new: true});

        if(!club) {
            throw new Error("Team to update not found");
        }

        return club;
    }

    static async updateClubStatus(clubId, body) {

        const club = await Club.findByIdAndUpdate({_id: clubId}, body,{new: true});

        return club;
    }

}

module.exports = ClubService;