import { INoteService } from "./INoteService";
import { Note } from "../models/Note";
import { Client } from "pg";


export class NoteService implements INoteService {

    // TODO: Move these to env
    private pg = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'noteTaker',
        password: 'password',
        port: 5432,
    })

    public async create(note: Note): Promise<Note> {

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

        await this.pg
            .query('INSERT INTO notes (subject, body, createdAt) VALUES ($1, $2, now()) RETURNING *',
                [note.subject, note.body])
            .then(res => {
                result = res.rows[0];
            });

        return result;
    }

    public async get(): Promise<Note[]> {
        
        let result = null;

        await this.pg.connect();

        await this.pg
            .query('SELECT * FROM notes')
            .then(res => {
                result = res.rows;
            });

        return result;
    }

    public async update(note: Note): Promise<Note> {

        if (typeof note.id === 'undefined' || note.id === null) {
            throw new Error('Id must be supplied on update');
        }

        let result = null;

        await this.pg.connect();

        await this.pg
            .query('UPDATE notes SET subject = $1, body = $2, lastModified = now() WHERE id = $3 RETURNING *', 
            [note.subject, note.body, note.id])
            .then(res => {
                result = res.rows[0];
            });

        return result;
    }

    public async delete(id: number): Promise<void> {
        
        await this.pg.connect();

        await this.pg.query('DELETE FROM notes WHERE id = $1', [id]);
    }
}