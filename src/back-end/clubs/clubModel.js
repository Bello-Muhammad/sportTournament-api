const mongoose = require('mongoose');
const Player = require('../players/playerModel');

const clubSchema = new mongoose.Schema({

    clubName: {
        type: String,
        trim: true,
        required: true,
    },
    played: {
        type: Number,
        default: 0
    },
    win: {
        type: Number,
        default: 0
    },
    lose: {
        type: Number,
        default: 0
    },
    gf: {
        type: Number,
        default: 0
    },
    ga:{
        type: Number,
        default: 0
    },
    gd: String,
    points:{
        type: Number,
        default: 0
    },
    tournament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament'
    }
})

clubSchema.virtual('players', {
    ref: 'Player',
    localField: '_id',
    foreignField: 'team'
})


const Club = mongoose.model('Club', clubSchema)

module.exports = Club