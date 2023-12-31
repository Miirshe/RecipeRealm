const express = require('express');
const { addUserProfile, updateUserProfile, deleteUserProfile, fetchUserProfile, fetchUsersProfile } = require('../controller/userProfileController');
const userProfileValidation = require('../validations/userProfileValidation');
const userAuthenticate = require('../middleware/userAuthenticate');

const userProfileRoutes = express.Router();
userProfileRoutes.post('/userProfile/add', userAuthenticate, userProfileValidation, addUserProfile);
userProfileRoutes.put('/userProfile', userAuthenticate, userProfileValidation, updateUserProfile);
userProfileRoutes.delete('/userProfile', userAuthenticate, deleteUserProfile);
userProfileRoutes.get('/userProfile', userAuthenticate, fetchUserProfile);
userProfileRoutes.get('/usersProfile', fetchUsersProfile);
module.exports = userProfileRoutes;