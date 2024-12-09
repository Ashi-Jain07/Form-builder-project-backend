import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { CategorizeQuestionRoutes } from './Routes/CategorizeQuestion.routes.js';
import { ClozeQuestionRoutes } from './Routes/ClozeQuestion.routes.js';
import { ComprehensionQuestionRoutes } from './Routes/ComprehensionQuestion.routes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

CategorizeQuestionRoutes(app);
ClozeQuestionRoutes(app);
ComprehensionQuestionRoutes(app);