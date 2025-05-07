import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // For local authentication; not required for Google OAuth
  role: { 
    type: String, 
    enum: ['brandAdmin', 'influencer', 'administrator', 'endUser'], 
    required: true 
  },
  googleId: { type: String }, // For Google OAuth users
  isApproved: { type: Boolean, default: false } // For brandAdmin/influencer accounts pending approval
}, { timestamps: true });

// Pre-save hook to hash the password if it is modified
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password during login
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
