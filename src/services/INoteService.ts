import { Note } from "../models/Note";


export interface INoteService {
    create(note: Note): Promise<Note>;
    get(): Promise<Array<Note>>;
    update(note: Note): Promise<Note>;
    delete(id: number): Promise<void>;
}