const Club = require('./clubModel');
const Players = require('../players/playerModel')

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
        .populate({path: 'player', select: 'firstName lastName otherName'})

            if(!club) {
                throw new Error('club not found!');
            }

            const result = {
                club: club.clubName,
                players: club.player
            }
            
            return result;
    }

    static async postClub(club) {
       
        const clubname = club;
        const club_Name = clubname.split(" ");

        for (let i = 0; i < club_Name.length; i++) {
            club_Name[i] = club_Name[i][0].toUpperCase() + club_Name[i].substr(1);
        }

        const clubName = club_Name.join(' ');

        const checkForClub = await Club.findOne({ clubName });

        if(checkForClub) {
            throw new Error('club exist: '+checkForClub.clubName);
        }

        const addClub = new Club({ clubName });

        await addClub.save((err) => {
            if(err) {
                throw new Error('can\'t save club');
            }
        })

        return addClub;
    }

    static async patchClub(clubId, body) {

        const updates = Object.keys(body);
        const club = await Club.findById({ _id: clubId });

        if(!club) {
            throw new Error("Team not available");
        }

        updates.forEach((update) => club[update] = body[update]);
        await club.save();

        return club;
            
    }

    static async removeClub(clubId) {

        const club = await Club.findById({_id: clubId});

        if(!club) {
            throw new Error('club does not exist!')
        }

        await Players.deleteMany({team: clubId})

        return club, {reply: 'club removed successfully'};
    }

}

module.exports = ClubService;