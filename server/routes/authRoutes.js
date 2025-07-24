import express from 'express';
import { registerUser, loginUser, googleAuth } from '../controllers/authController.js';

const router = express.Router();

// Route for local registration
router.post('/register', registerUser);

// Route for local login
router.post('/login', loginUser);

// (Optional) Google OAuth routes (to be implemented later)
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), googleAuth);

export default router;
