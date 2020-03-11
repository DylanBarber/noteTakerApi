"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class NoteService {
    constructor() {
        // TODO: Move these to env
        this.pg = new pg_1.Client({
            user: 'root',
            host: 'localhost',
            database: 'noteTaker',
            password: 'password',
            port: 5432,
        });
    }
    create(note) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.pg.connect();
            this.pg.query('INSERT INTO `notes` (subject, body, createdAt) VALUES ($1, $2, now())', [note.subject, note.body], (err, res) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    throw err;
                yield this.pg.end();
                result = res.rows[0];
            }));
            return result;
        });
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
    update(note) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.NoteService = NoteService;
//# sourceMappingURL=NoteService.js.map