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

// ADD this url if uploading: https://widget-builder-ba-project.herokuapp.com/
app.use(
  cors({
    origin: "https://seca-user-table.herokuapp.com/", // <-- location of the react app were connecting to (http://localhost:3000)
    credentials: true,
  })
);

// Routes
app.use('/', users);

app.use(express.static('./dist/user-table'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: "dist/user-table/" });
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});