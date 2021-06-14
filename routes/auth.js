const express = require('express')
const router = express.Router()
const passport = require('passport')

// GET  /auth/google		Auth with Google
router.get('/google', passport.authenticate('google', { scope: [ 'profile' ], prompt: 'select_account' }))

// GET  /auth/google/callback		Google auth callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
	res.redirect('/dashboard')
})

// GET	//auth/logout		Logout user
router.get('/logout', (req, res) => {
	req.logout()
	req.session.destroy()
	res.clearCookie('connect.sid')
	res.redirect('/')
})

module.exports = router
