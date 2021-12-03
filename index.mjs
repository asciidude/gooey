import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import serverless from 'serverless-http';
const app = express();

export const handler = serverless(app);

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_URI, () => console.log('Connected to db'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

app.listen(process.env.PORT || 8000, () =>
    console.log(`Now listening on port ${process.env.PORT || 8000}`)
);