const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.port || 5000;

const app = express();

app.use(cors({
    origin: ['http://localhost:3000',],
}))

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/api/goals', require('./routes/goalRoutes.js'));
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});