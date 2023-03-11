const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
    firstTeam: String,
    secondTeam: String,
    date: String,
    time: String,
    tourFix: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament'
    }
})

const Fixture = mongoose.model('Fixture', fixtureSchema);

module.exports = Fixture;