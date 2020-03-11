const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const notes = require('./controllers/NoteController');

app.use(bodyParser.json());

app.use('/', notes);

const port: string | number = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
})