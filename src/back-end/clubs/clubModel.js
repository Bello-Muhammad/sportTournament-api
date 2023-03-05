const mongoose = require('mongoose')
// const Tournament = require('../tournaments/tournamentModel');
const Player = require('../players/playerModel')

const clubSchema = new mongoose.Schema({

    clubName: {
        type: String,
        trim: true,
        required: true,
    },
    played: Number,
    win: Number,
    lose: Number,
    gf: Number,
    ga: Number,
    gd: String,
    points: Number,


})

clubSchema.virtual('player', {
    ref: 'Player',
    localField: '_id',
    foreignField: 'team'
});


const Club = mongoose.model('Club', clubSchema)

module.exports = Club