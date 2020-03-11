const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const notes = require('./controllers/NoteController');

app.use(bodyParser.json());

app.use('/', notes);