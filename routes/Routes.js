const express = require('express')
const { updateProfile, setProfile, getProfile, deleteProfile } = require('../controllers/Controller')
const router = express.Router()

//retrive profile
router.get('/profile',getProfile)

//create profile
router.post('/profile',setProfile)

//update profile
router.put('/profile',updateProfile)

//delete profile
router.delete('/profile',deleteProfile)

exports.router = router