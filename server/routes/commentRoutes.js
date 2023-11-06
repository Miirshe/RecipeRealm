const express = require('express');
const userAuthenticate = require('../middleware/userAuthenticate');
const { add_comment, fetchComments } = require('../controller/commentController');

const commentRoutes = express.Router();
commentRoutes.post('/comments/add', userAuthenticate, add_comment)
commentRoutes.get('/comments', fetchComments)
module.exports = commentRoutes;