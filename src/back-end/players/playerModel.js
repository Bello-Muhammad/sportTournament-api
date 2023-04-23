const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    otherName: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    team: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    }
})

const Player = mongoose.model('Player', playerSchema)

module.exports =  Player;