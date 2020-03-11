import { INoteService } from "../services/INoteService";
import { NoteService } from "../services/NoteService";

const router = require('express').Router();

router.post('/note', async (req, res) => {

    const noteService: INoteService = new NoteService();

    try {

        res.json(await noteService.create(req.body));

    } catch (err) {

        if (err.message === 'Subject and body must be supplied' || err.message === 'Id cannot be supplied on create') {

            res.sendStatus(400);
        } else {

            res.sendStatus(500);
        }

    }
})

router.get('/note', (req, res) => {

    // THIS IS WHERE CALL TO GET ON SERVICE WILL BE
    res.end();
})

router.put('/note', (req, res) => {

    // THIS IS WHERE CALL TO UPDATE NOTE ON SERVICE WILL BE
    res.end();
})

router.delete('/note', (req, res) => {

    // THIS IS WHERE CALL TO DELETE NOTE ON SERVICE WILL BE
    res.end();
})

module.exports = router;