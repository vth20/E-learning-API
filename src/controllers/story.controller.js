const Story = require('../models/story.model.js')

const storyController = {
    addStory: async (req, res) => {
        try {
            const newStory = new Story(req.body)
            const savedStory = await newStory.save();
            res.status(200).json(savedStory)
        } catch (error) {
            res.status(404).json('404 Not Found')
        }
    },
    getAllStory: async (req, res) => {
        try {
            const stories = await Story.find()
            res.status(200).json(stories)
        } catch (error) {
            res.status(404).json('404 Not Found')
        }
    },
    getAStory: async (req, res) => {
        try {
            const story = await Story.findById(req.params.id)
            story?res.status(200).json(story):res.status(200).json('404 not found')
        } catch (error) {
            res.status(404).json('404 Not Found')
        }
    },
    deleteAStory: async (req, res) => {
        try {
            await Story.findByIdAndDelete(req.params.id)
            res.status(200).json('Delete successfully!')
        } catch (error) {
            res.status(404).json('404 Not Found')
        }
    }
}

module.exports = storyController