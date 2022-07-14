const router = require('express').Router()
const commentController = require('../../controllers/comment.controller.js')

// CREATE A COMMENT
router.post('/', commentController.addComment)

// GET ALL COMMENTS
router.get('/', commentController.getComments)

// GET A COMMENT
router.get('/:id', commentController.getAComment)

// UPDATE A COMMENT
router.put('/:id', commentController.updateAComment)

// DELETE A COMMENT
router.delete('/:id', commentController.deleteAComment)

module.exports = router