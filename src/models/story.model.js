const { string } = require('joi');
const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const Story = mongoose.model('story', storySchema)
module.exports = Story