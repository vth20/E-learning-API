const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

const postController = {
    addPost: async (req, res) => {
        try {
            const newPost = new Post(req.body)
            const savedPost = await newPost.save();
            res.status(200).json(savedPost)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getPost: async (req, res) => {
        try {
            const posts = await Post.find()
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('comments')
            post?res.status(200).json(post):res.status(200).json('404 not found')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateAPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('comments')
            await post.updateOne({ $set: req.body })
            res.status(200).json('Update successfully!')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteAPost: async (req, res) => {
        try {
            await Comment.updateMany(
                { post_id: req.params.id },
                { post_id: undefined }
            )
            await Post.findByIdAndDelete(req.params.id)
            res.status(200).json('Delete successfully!')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = postController