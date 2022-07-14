const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    'user_id': {
        type: String,
        required: true,
    },
    'content': {
        type: String,
        required: true,
    },
    'media': {
        type: [String],
    },
    'reaction': {
        type: [Object], // []
    },
    'comments': [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    'privacy': {
        type: String,
    },
    'createdAt': { type: Date },
    'updatedAt': { type: Date },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const Post = mongoose.model('Post', postSchema)

module.exports = Post
