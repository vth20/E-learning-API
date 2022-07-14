const router = require('express').Router()
const postController = require('../../controllers/post.controller.js')

// CREATE A POST
router.post('/', postController.addPost)

// GET ALL POSTS
router.get('/', postController.getPost)

// GET A POST
router.get('/:id', postController.getAPost)

// UPDATE A POST
router.put('/:id', postController.updateAPost)

// DELETE A POST
router.delete('/:id', postController.deleteAPost)

module.exports = router