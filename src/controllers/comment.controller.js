const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

const commentController = {
    addComment: async (req, res) => {
        try {
            const newComment = new Comment(req.body)
            const savedComment = await newComment.save();
            if (req.body.post_id) {  // req.body.author la cai _id cua tac gia
                // const author = Author.find({_id: req.body.author})
                const author = Post.findById(req.body.post_id)
                await author.updateOne({ $push: { comments: savedComment._id } })
            }
            res.status(200).json(savedComment)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getComments: async (req, res) => {
        try {
            const comments = await Comment.find()
            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAComment: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id)
            comment ? res.status(200).json(comment) : res.status(200).json('404 not found')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateAComment: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id)
            await comment.updateOne({ $set: req.body })
            res.status(200).json('Update successfully!')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteAComment: async (req, res) => {
        try {
            await Post.updateMany(
                { comments: req.params.id },
                { $pull: { comments: req.params.id } }
            )
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json('Delete successfully!')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = commentController