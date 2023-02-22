const mongoose = require('mongoose');

const wordsSchema = mongoose.Schema({
    value: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    },
},
{
    timestamps: {createdAt: true, updatedAt: false},
})

module.exports = mongoose.model("words", wordsSchema)