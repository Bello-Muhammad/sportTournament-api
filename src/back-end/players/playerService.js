const Players = require('./playerModel');
const firstLetterUpperCase = require('../utils/helpers');
const Club = require('../clubs/clubModel');

class PlayerService {

    static async getPlayers(clubId) {

        const players = await Players.find({team: clubId});
            
        if(!players.length === 0 ) {
            throw new Error("No player found!");
        }

        return players;
    }

    static async getActivePlayers(clubId) {

        const checkClubStatus = await Club.findById({_id: clubId});

        if(checkClubStatus.status === "offline" || checkClubStatus.status === "Offline") {
            throw new Error('this club is not active');
        }

        const players = await Players.find({team: clubId, status: 'active'});
            
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

    static async addPlayer(clubId, body) {

        const {_firstName, _lastName, _otherName, _username} = body;

        const checkPlayerExist =  await Players.findOne({_username: {$regex: _username, $options: 'i'}});

        if(checkPlayerExist) {
            throw new Error("player added already"+ checkPlayerExist);
        }

        const firstName = firstLetterUpperCase(_firstName);
        const lastName = firstLetterUpperCase(_lastName);
        const otherName = _otherName ? firstLetterUpperCase(_otherName) : "";
        const username = firstLetterUpperCase(_username);
        const team = clubId;

        return await Players.create({firstName, lastName, otherName, username, team})

    }

    static async patchPlayer(playerId, body)  {

        const player = await Players.findByIdAndUpdate({_id: playerId}, body, {new: true})

        if(!player) {
            throw new Error('Player not found!')
        }

        return player;
    }

}

module.exports = PlayerService;