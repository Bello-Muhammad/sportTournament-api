const Players = require('./playerModel');
const firstLetterCap = require('../utils/helpers');
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
        let _name = [_firstName,_lastName,_otherName];
        let name = firstLetterCap(_name.join(" ")).split(" ");
        
        const checkPlayerExist =  await Players.findOne({firstName: name[0], lastName: name[1]});

        if(checkPlayerExist) {
            throw new Error("player added already"+ checkPlayerExist);
        }

        if(name.length === 2) {
            
            const playerDetail = new Players({
                firstName: name[0],
                lastName: name[1],
                team: clubId
            });
            return await playerDetail.save();
        }else{

            const playerDetail = new Players({
                firstName: name[0],
                lastName: name[1],
                otherName: name[2],
                team: clubId
            });
            return await playerDetail.save();
        }
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