const Player = require('./playerModel');
const Club = require('../clubs/clubModel');

class PlayerService {

    static async getPlayers(clubId) {

        const club = await Club.findById({_id: clubId});
        const players = await Player.find({team: club.clubName});
            
        if(players.length === 0 ) {
            throw new Error("No player found!");
        }

        return players;

    }

    static async getPlayer(body) {

        const {firstName} = body;
        const searchPlayer = await Player.find({firstName});

        if(!searchPlayer) {
            throw new Error("player name not found");                
        }

        return searchPlayer;

    }

    static async postPlayer(clubId, body) {

        const {firstName, lastName, otherName} = body;
        // const club = await Club.findById({_id: clubId})
        const checkPlayerExist =  await Player.findOne({firstName, lastName})

        if(checkPlayerExist) {
            throw new Error("player added already"+ checkPlayerExist);
        }

        const playerDetail = new Player({
            firstName,
            lastName,
            otherName,
            team: clubId
        })

        await playerDetail.save();

        return playerDetail;            

    }

    static async patchPlayer(playerId, body)  {

        const updates = Object.keys(body)
        const player = await Player.findById({_id: playerId})

        if(!player) {
            throw new Error('Player not found!')
        }

        updates.forEach((update) => player[update] = body[update]);
        await player.save();

        return player
    }

    static async removePlayer(playerId) {
        
        const removedPlayer = await Player.findByIdAndDelete({_id: playerId});
        return `${removedPlayer.firstName} ${removedPlayer.otherName} ${removedPlayer.lastName} Removed`;

    }

}

module.exports = PlayerService;