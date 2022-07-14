const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    'root_id': {       // comment_id ? replies : comment
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: false
    },
    'post_id': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    'user_id': {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        type: String,
        required: false
    },
    'content': {
        type: String,
    },
    'media': {
        type: [String]
    },
    'createdAt': { type: Date },
    'updatedAt': { type: Date },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment
