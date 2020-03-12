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

router.get('/note', async (req, res) => {

    const noteService: INoteService = new NoteService();

    res.json(await noteService.get());
})

router.put('/note', async (req, res) => {

    const noteService: INoteService = new NoteService();

    try {

        res.json(await noteService.update(req.body));

    } catch (err) {

        if (err.message === 'Id must be supplied on update') {

            res.sendStatus(400);
        } else {

            res.sendStatus(500);
        }

    }
})

router.delete('/note', async (req, res) => {

    const noteService: INoteService = new NoteService();

    res.json(await noteService.delete(req.body.id));
})

module.exports = router;