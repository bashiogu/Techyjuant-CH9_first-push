const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');



const connectDB = require('./config/db');
const studentsRoutes = require('./routes/students.routes');

const app = express();
dotenv.config();

const port = process.env.PORT || 1234;

app.use(express.json());
app.use(morgan('dev'));




app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/students', studentsRoutes);



app.listen(port, () => {
    connectDB();
    console.log(`server is running on port ${port}`);
});