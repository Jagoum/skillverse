import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// PostgreSQL setup for users
const pgPool = new Pool({
    connectionString: process.env.POSTGRES_URI,
});

pgPool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err) => console.error('PostgreSQL connection error:', err));

// MongoDB setup for skills
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// MongoDB Skill schema
const skillSchema = new mongoose.Schema({
    title: String,
    category: String,
    creator: {
        id: String,
        name: String,
        avatarUrl: String,
        title: String,
    },
    thumbnailUrl: String,
    rating: Number,
    reviewCount: Number,
    price: mongoose.Schema.Types.Mixed,
    isPaid: Boolean,
});

const Skill = mongoose.model('Skill', skillSchema);

// Routes

// User routes (PostgreSQL)
app.get('/api/users', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT username, role FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.post('/api/users', async (req, res) => {
    const { username, role } = req.body;
    try {
        await pgPool.query('INSERT INTO users (username, role) VALUES ($1, $2)', [username, role]);
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Skill routes (MongoDB)
app.get('/api/skills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
});

app.post('/api/skills', async (req, res) => {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create skill' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
