import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './server/routes/authRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the URI from your .env file
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use authentication routes (make sure your authRoutes.js file properly imports and uses the authController)
app.use('/api/auth', authRoutes);

// Define a Campaign schema for your campaign-related endpoints
const campaignSchema = new mongoose.Schema({
  campaignName: { type: String, required: true },
  description: { type: String, required: true },
  objectives: { type: String, required: true },
  overallBudget: { type: Number, required: true },
  dailySpend: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  demographics: { type: String },
  hasHistoricalData: { type: Boolean, default: false },
  historicalDataDetails: { type: String },
  keyMessages: { type: String, required: true },
  cta: { type: String, required: true },
  specificOffers: { type: String },
  enableAR: { type: Boolean, default: false },
  enableVoice: { type: Boolean, default: false },
  multiStepForm: { type: Boolean, default: false },
  personalizedLanding: { type: Boolean, default: false },
  campaignStatus: { type: String, enum: ['draft', 'launch'], required: true },
  kpis: [{ type: String }],
  createdBy: { type: String, required: true } // used to filter campaigns by user email
}, { timestamps: true });

const Campaign = mongoose.model('Campaign', campaignSchema);

// API endpoint to save a new campaign
app.post('/api/campaigns', async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ message: "Failed to save campaign", error });
  }
});

// API endpoint to fetch all campaigns
app.get('/api/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: "Failed to load campaigns", error });
  }
});

// Start the server on the designated port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
