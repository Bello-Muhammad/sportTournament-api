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
    team: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const Player = mongoose.model('Player', playerSchema)

module.exports =  Player;