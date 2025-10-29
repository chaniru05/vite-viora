const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Website Schema
const websiteSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  websiteType: { type: String, required: true },
  template: { type: String, required: true },
  colorScheme: { type: String, required: true },
  pages: [String],
  features: [String],
  domain: String,
  status: { type: String, default: 'draft' }, // draft, launched
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Website = mongoose.model('Website', websiteSchema);

// Routes

// Create new website
app.post('/api/websites', async (req, res) => {
  try {
    const website = new Website(req.body);
    await website.save();
    res.status(201).json({ success: true, data: website });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all websites
app.get('/api/websites', async (req, res) => {
  try {
    const websites = await Website.find().sort({ createdAt: -1 });
    res.json({ success: true, data: websites });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single website
app.get('/api/websites/:id', async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' });
    }
    res.json({ success: true, data: website });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update website
app.put('/api/websites/:id', async (req, res) => {
  try {
    const website = await Website.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' });
    }
    res.json({ success: true, data: website });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Delete website
app.delete('/api/websites/:id', async (req, res) => {
  try {
    const website = await Website.findByIdAndDelete(req.params.id);
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' });
    }
    res.json({ success: true, message: 'Website deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Launch website (change status)
app.patch('/api/websites/:id/launch', async (req, res) => {
  try {
    const website = await Website.findByIdAndUpdate(
      req.params.id,
      { status: 'launched', updatedAt: Date.now() },
      { new: true }
    );
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' });
    }
    res.json({ success: true, data: website });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});