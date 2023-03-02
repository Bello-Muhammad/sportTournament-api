const mongoose = require('mongoose')
const Tournament = require('../tournaments/tournamentModel')

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
    points: Number
})

clubSchema.virtual('tournament', {
    ref: 'Tournament',
    localField: '_id',
    foreignField: 'participant'
})


const Club = mongoose.model('Club', clubSchema)

module.exports = Club