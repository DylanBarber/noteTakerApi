import { INoteService } from "./INoteService";
import { Note } from "../models/Note";
import { Client } from "pg";


export class NoteService implements INoteService {

    // TODO: Move these to env
    private pg = new Client({
        user: 'root',
        host: 'localhost',
        database: 'noteTaker',
        password: 'password',
        port: 5432,
    })

    async create(note: Note): Promise<Note> {

        if (typeof note.id !== 'undefined' && note.id !== null) {
            throw new Error('Id cannot be supplied on create');
        }

        if (typeof note.subject === 'undefined' ||
            note.subject === null ||
            typeof note.body === 'undefined' ||
            note.body === null) {

            throw new Error('Subject and body must be supplied');
        }


        let result = null;

        await this.pg.connect();

        this.pg.query('INSERT INTO `notes` (subject, body, createdAt) VALUES ($1, $2, now())',
            [note.subject, note.body], async (err, res) => {

                if (err) throw err;

                await this.pg.end();

                result = res.rows[0];
            })

        return result;




    }

    get(id?: number): Promise<Note> | Promise<Note[]> {
        throw new Error("Method not implemented.");
    }

    update(note: Note): Promise<Note> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}