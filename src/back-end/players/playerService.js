const Players = require('./playerModel');
const firstLetterUpperCase = require('../utils/helpers');
// const Club = require('../clubs/clubModel');

class PlayerService {

    static async getPlayers(clubId) {

        const players = await Players.find({team: clubId});
            
        if(!players.length === 0 ) {
            throw new Error("No player found!");
        }

        return players;
    }

    static async getPlayer(body) {

        const {firstName} = body;
        const searchPlayer = await Players.find({firstName: {$regex: firstName, $options: 'i'}});

        if(!searchPlayer) {
            throw new Error("player name not found");                
        }

        return searchPlayer;

    }

    static async postPlayer(clubId, body) {

        const {_firstName, _lastName, _otherName} = body;

        const firstName = firstLetterUpperCase(_firstName);
        const lastName = firstLetterUpperCase(_lastName);
        const OtherName = firstLetterUpperCase(_otherName);
        const otherName = OtherName || "";
        const team = clubId

        // console.log(firstName, lastName, otherName)
        const checkPlayerExist =  await Players.findOne({firstName, lastName});

        if(checkPlayerExist) {
            throw new Error("player added already"+ checkPlayerExist);
        }

        // // const player = playerDetails(name);
        // // const playersDetail = new Players({
        // //     ...player,
        // //     team: clubId
        // // })
        return await Players.create({firstName, lastName, otherName, team})

    }

    static async patchPlayer(playerId, body)  {

        const player = await Player.findByIdAndUpdate({_id: playerId}, body, {new: true})

        if(!player) {
            throw new Error('Player not found!')
        }

        return player
    }

    static async removePlayer(playerId) {
        
        const removedPlayer = await Player.findByIdAndDelete({_id: playerId});
        return `${removedPlayer.firstName} ${removedPlayer.otherName} ${removedPlayer.lastName} Removed`;

    }

}

module.exports = PlayerService;