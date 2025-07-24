import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export const registerUser = async (req, res) => {
  // Log the incoming request for debugging
  console.log("Received registration data:", req.body);
  
  const { fullName, username, email, password, role } = req.body;
  
  // Validate required fields
  if (!fullName || !username || !email || !password || !role) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  
  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  try {
    // Determine approval based on role
    const isApproved = (role === 'brandAdmin' || role === 'influencer') ? false : true;
    
    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create the new user (extra fields can be added later if needed)
    const user = await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
      role,
      isApproved,
    });
    
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      role: user.role,
      isApproved: user.isApproved,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ message: 'Invalid user data', error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        role: user.role,
        isApproved: user.isApproved,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const googleAuth = async (req, res) => {
  res.json({ message: "Google OAuth not implemented yet" });
};
