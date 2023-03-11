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

        const {_firstName, _lastName, _otherName} = body;
        const name = [_firstName, _lastName, _otherName];

        // console.log(name)

        for(let i = 0; i < name.length; i++) {
            if(!name[1][0]){}continue;
            name[i] = name[i][0].toUpperCase() + name[i].substr(1)
        }

        const firstName = name[0], lastName = name[1], otherName = name[2];

        console.log(firstName, lastName, otherName)
        
        const club = await Club.findById({_id: clubId})
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