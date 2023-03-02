const Club = require('./clubModel');
const ClubPlayers = require('../players/playerModel');

class ClubService {

    static async getClubs() {
        const clubs = await Club.find()

        if(clubs.length === 0) {
            throw new Error('No club added yet');
        }

        return clubs;
    }

    static async getClub(clubId) {
        const team = await Club.findById({_id: clubId});
        const players = await ClubPlayers.find({team: clubId})

            if(!team) {
                throw new Error('club not found!');
            }

            if(!players) {
                throw new Error('No player from this club');
            }

            const playersName = [];

            players.forEach((player) => playersName.push(player.playerName))

            const result = {
                club_name: team.clubName,
                players: playersName
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

        const club = await Club.findByIdAndDelete({_id: clubId});

        if(!club) {
            throw new Error('club does not exist!')
        }

        return club;
    }

}

module.exports = ClubService;