const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const users = require('./routes/users');

require('dotenv').config();

app.use(express.json());

const uri = process.env.ATLAS_URI;

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true, 
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://seca-user-table.herokuapp.com", //https://seca-user-table.herokuapp.com/
    credentials: true,
  })
);

// Routes
app.use('/', users);


app.use( express.static(path.join(__dirname, '/dist/user-table')));
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '/dist/user-table/index.html'));
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});