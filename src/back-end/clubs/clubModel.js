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
        default: 0,
        required: true
    },
    win: {
        type: Number,
        default: 0,
        required: true
    },
    lose: {
        type: Number,
        default: 0,
        required: true
    },
    gf: {
        type: Number,
        default: 0,
        required: true
    },
    ga:{
        type: Number,
        default: 0,
        required: true
    },
    gd: {
        type: String,
        default: "",
        required: true
    },
    points:{
        type: Number,
        default: 0,
        required: true
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

clubSchema.pre('remove', async function (next) {
    const club = this
    await Player.deleteMany({team: club._id})
    next()
})


const Club = mongoose.model('Club', clubSchema)

module.exports = Club