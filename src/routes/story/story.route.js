const router = require('express').Router()
const storyController = require('../../controllers/story.controller.js')

router.post('/', storyController.addStory)
router.get('/', storyController.getAllStory)
router.get('/:id', storyController.getAStory)
router.delete('/:id', storyController.deleteAStory)

module.exports = router