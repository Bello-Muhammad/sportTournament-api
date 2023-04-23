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

    static async getClub(clubId) {

        const club = await Club.findOne({_id: clubId})
        .populate({path: 'players', select: 'firstName lastName otherName'}).exec()

            if(!club) {
                throw new Error('club not found!');
            }

            return club;
              
    }

    static async postClub(tournamentId, club) {

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

    static async removeClub(clubId) {

        const club = await Club.findById({_id: clubId});

        return await club.remove()
    }

}

module.exports = ClubService;