const mongoose = require('mongoose');

const analyticsSchema = mongoose.Schema({
    intent: {
        type: String,
    },
    subIntent: {
        type: String,
    },
    point: {
        type: Number,
    },
})

module.exports = mongoose.model("analytics", analyticsSchema)