const mongoose = require('mongoose');
const Club = require('../clubs/clubModel');
const Fixture = require('./fixturesModel')

const tournamentSchema = mongoose.Schema({

    title: {
        type: String,
        trim: true
    },
    session: String,
    startDate: Date,
    endDate: Date,
    progress: {
        type: String,
        default: 'not active'
    }

})

tournamentSchema.virtual('club', {
    ref: 'Club',
    localField: '_id',
    foreignField: 'tournament'
});

tournamentSchema.virtual('fixture', {
    ref: 'Fixture',
    localField: '_id',
    foreignField: 'tourFix'
});


const Tournament = new mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;