const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
    firstTeam: {
        type: String,
        require: true
    },
    secondTeam: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        require: true
    },
    tourFix: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament'
    }
})

const Fixture = mongoose.model('Fixture', fixtureSchema);

module.exports = Fixture;