const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // process.env.PORT is handy for hosting like heroku 

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully.")
});

const practiceRouter = require('./routes/practice-20200204'); // locations of routes file
app.use('/practice', practiceRouter); // directs the url path to the routes file

const moduleRouter = require('./routes/modules-20200204'); // locations of routes file
app.use('/modules', moduleRouter); // directs the url path to the routes file

const questionsRouter = require('./routes/questions-20200204'); // locations of routes file
app.use('/questions', questionsRouter); // directs the url path to the routes file

const tutorialsRouter = require('./routes/tutorials-20200204'); // locations of routes file
app.use('/tutorials', tutorialsRouter); // directs the url path to the routes file

const testRouter = require('./routes/test');
app.use('/test', testRouter); 

/* // simple homepage test
app.get('/', function (req, res) {
  res.send('Home page is working :)')
});*/

app.listen(port, () => console.log(`Server is running on ${port}`));
